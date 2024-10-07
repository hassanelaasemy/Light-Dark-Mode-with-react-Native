import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        },
      ]}
    >
      <Text
        style={{
          color: theme === "light" ? "black" : "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Home
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
