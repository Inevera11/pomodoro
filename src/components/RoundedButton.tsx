import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

type RoundedButtonTypes = {
  size?: number;
  style?: {};
  textStyle?: {};
  onPress?: () => void;
  title?: string;
};

export const RoundedButton = ({
  size = 125,
  style = {},
  textStyle = {},
  title,
  onPress,
}: RoundedButtonTypes) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} onPress={onPress}>
      <Text style={[styles(size).text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: { color: colors.white, fontSize: size / 3 },
  });
