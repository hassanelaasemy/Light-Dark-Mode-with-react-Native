import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      AsyncStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      AsyncStorage.setItem("theme", action.payload);
    },
    loadTheme: (state, action) => {
      state.theme = action.payload || "light";
    },
  },
});
export const { toggleTheme, setTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
