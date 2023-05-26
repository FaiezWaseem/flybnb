import * as React from "react";
import Constants from "expo-constants";
import configureDesignSystem from "./src/presets";
import Box from "./src/utility/Box";
import Route from "./src/navigation/Routes";
import { StatusBar } from "react-native";

configureDesignSystem();
export default function App() {
  return (
    <Box flex>
      <StatusBar backgroundColor={"#000"} />
      <Route />
    </Box>
  );
}
