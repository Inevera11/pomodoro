import { colors } from "./src/utils/colors";
import { useState } from "react";
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
  const [currentSubject, setCurrentSubject] = useState<boolean>(true);

  const setCurrentSubjectProps: (value: boolean) => void = (value) => {
    setCurrentSubject(value);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {currentSubject ? (
          <Focus setCurrSubject={setCurrentSubjectProps} />
        ) : (
          <View>
            <Text>Hiiiiii m8</Text>
          </View>
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
