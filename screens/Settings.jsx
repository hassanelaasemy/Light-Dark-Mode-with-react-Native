import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/ThemeSlice";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

export default function Settings() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#f0f0f0" : "#333" },
      ]}
    >
      <Text
        style={[styles.text, { color: theme === "light" ? "#000" : "#fff" }]}
      >
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </Text>
      <View style={styles.switchContainer}>
        <Icon 
          name={theme === "light" ? "wb-sunny" : "nights-stay"} // Day icon for light mode, night icon for dark mode
          size={24}
          color={theme === "light" ? "#000" : "#fff"}
        />
        <Switch
          value={theme === "dark"}
          onValueChange={handleToggle}
          trackColor={{ false: "#767577", true: "#81b0ff" }} // Custom track colors
          thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"} // Custom thumb colors
        />
        <Icon 
          name={theme === "light" ? "nights-stay" : "wb-sunny"} // Night icon for light mode, day icon for dark mode
          size={24}
          color={theme === "light" ? "#000" : "#fff"}
        />
      </View>
      <Text
        style={[
          styles.text,
          { color: theme === "light" ? "#000" : "#fff", marginTop: 20 },
        ]}
      >
        switch Test Color.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
