import { colors } from "./src/utils/colors";
import { useState } from "react";
import Timer from "./src/components/Timer";
import { ProgressBar } from "react-native-paper";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import { Focus } from "./src/features/Focus";
import { FocusHistory } from "./src/features/FocusHistory";

// view = div,yarn ifconfig

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string>("");
  const [focusHistory, setFocusHistory] = useState<Array<string>>(["hi"]);

  const setCurrentSubjectProps: (value: string) => void = (value) => {
    setCurrentSubject(value);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {currentSubject ? (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(val) => setFocusHistory((prev) => [...prev, val])}
            clearSubject={setCurrentSubjectProps}
          />
        ) : (
          <>
            <Focus setCurrSubject={setCurrentSubjectProps} />
            <FocusHistory history={focusHistory} />
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
