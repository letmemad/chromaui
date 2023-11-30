import React from "react";
import { View, useColorScheme } from "react-native";

import { ChromaProvider } from "../../dist/index";

import { dark } from "./theme/dark";
import { light } from "./theme/light";

const Application: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme == "dark" ? dark : light;

  return (
    <ChromaProvider theme={theme}>
    </ChromaProvider>
  );
}

export default Application;