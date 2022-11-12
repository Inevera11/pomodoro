import { colors } from "./src/utils/colors";
import { useState } from "react";
import Timer from "./src/components/Timer";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
} from "react-native";
import { Focus } from "./src/features/Focus";

// view = div,yarn ifconfig

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string>("");

  const setCurrentSubjectProps: (value: string) => void = (value) => {
    setCurrentSubject(value);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {currentSubject ? (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => {}}
          />
        ) : (
          <Focus setCurrSubject={setCurrentSubjectProps} />
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
