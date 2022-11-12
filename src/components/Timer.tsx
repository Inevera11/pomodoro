import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TimerTypes = {
  focusSubject: string;
  onTimerEnd: () => void;
  clearSubject: () => void;
};

const Timer = ({ focusSubject, onTimerEnd, clearSubject }: TimerTypes) => {
  return <View>Timer</View>;
};

export default Timer;
