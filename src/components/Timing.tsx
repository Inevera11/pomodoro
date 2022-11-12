import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "./RoundedButton";

type TimingTypes = {
  onChangeTime: (val: number) => void;
};

const Timing = ({ onChangeTime }: TimingTypes) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      <RoundedButton title="30" size={95} onPress={() => onChangeTime(30)} />
      <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Timing;
