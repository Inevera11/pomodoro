import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { RoundedButton } from "../components/RoundedButton";

type FocusTypes = {
  setCurrSubject: (value: boolean) => void;
};

export const Focus = ({ setCurrSubject }: FocusTypes) => {
  const [subject, setSubject] = useState<string>("");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyles}
            label="What would You like to focus on?"
            onChangeText={(e) => setSubject(e)}
          />
          <View>
            <RoundedButton size={50} title="+" />
          </View>
        </View>
        <Text style={styles.text}>{subject}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyles: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
  inputContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 25,
    color: colors.white,
    flexDirection: "row",
  },
  text: {
    color: colors.white,
  },
});
