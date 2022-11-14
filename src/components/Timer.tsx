import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  TouchableOpacity,
} from "react-native";
import CountDown from "./CountDown";
import { RoundedButton } from "./RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { ProgressBar } from "react-native-paper";
import Timing from "./Timing";

const oneSecond = 1000;

const PATTERN = [
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
  1 * oneSecond,
];

type TimerTypes = {
  focusSubject: string;
  onTimerEnd: () => void;
  clearSubject: (val: string) => void;
};

const Timer = ({ focusSubject, onTimerEnd, clearSubject }: TimerTypes) => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(0.1);

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    setProgress(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown
          minutes={minutes}
          onEnd={onEnd}
          isPaused={!isStarted}
          onProgress={(progres) => setProgress(progres)}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.yellow}
          style={{ height: spacing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.TimingWrapper}>
        <Timing onChangeTime={(min: number) => setMinutes(min)} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={progress === 0 ? "Again" : isStarted ? "pause" : "start"}
          onPress={() => {
            progress === 0 ? setIsStarted(true) : setIsStarted((prev) => !prev);
          }}
        />
      </View>
      <View style={styles.bottonOnes}>
        <RoundedButton
          style={{ marginRight: spacing.lg }}
          title="-"
          onPress={() => {
            minutes > 0 ? setMinutes((prev) => prev - 1) : setMinutes(0);
          }}
          size={50}
        />
        <RoundedButton
          style={{ marginLeft: spacing.lg }}
          title="+"
          onPress={() => setMinutes((prev) => prev + 1)}
          size={50}
        />
      </View>
      <TouchableOpacity onPress={() => clearSubject("")}>
        <Text style={styles.quit}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    marginTop: spacing.md,
    paddingTop: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  TimingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: spacing.md,
    marginTop: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  bottonOnes: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: spacing.md,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  quit: {
    color: "red",
    alignSelf: "center",
    paddingBottom: spacing.sm,
  },
});
export default Timer;
