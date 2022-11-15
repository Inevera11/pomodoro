import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

type ItemTypes = {
  item: string;
};

type FocusTypes = {
  history: Array<string>;
};

export const FocusHistory = ({ history }: FocusTypes) => {
  if (!history || !history.length) return null;

  const renderItem = ({ item }: ItemTypes) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused of</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: "bold",
  },
});
