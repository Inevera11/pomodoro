import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

type CountDownTypes = {
  minutes?: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
};

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

const CountDown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: CountDownTypes) => {
  const interval: { current: NodeJS.Timeout | null } = React.useRef(null);
  const [millis, setMillis] = useState<number>(0);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0 && interval.current !== null) {
        clearInterval(interval.current);
        onEnd();
        setMillis(minutesToMillis(minutes));
        return time;
      } else {
        const timeLeft = time - 1000;
        return timeLeft;
      }
    });
  };
  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current as NodeJS.Timeout);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});
export default CountDown;
