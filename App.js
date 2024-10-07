import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./components/CustomTabBar";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/Store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadTheme } from "./redux/ThemeSlice";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadStoredTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      dispatch(loadTheme(storedTheme));
    };
    loadStoredTheme();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />} // Use custom tab bar
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
