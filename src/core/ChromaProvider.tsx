import React from "react";
import { useColorScheme } from "react-native";

import { ChromaConfig } from "../types/config";
import { ChromaContext } from "./ChromaContext";
import { validateChromaConfig } from "../utils/validateChromaConfig";

interface Properties {
  config: ChromaConfig;
  children: React.ReactNode;
}

const ChromaProvider: React.FC<Properties> = ({ children, config }) => {
  const scheme = useColorScheme() ?? "light";
  const colorMode = config.initialColorMode == "system" ? scheme : (config.initialColorMode ?? "light");

  const { error, isValid } = validateChromaConfig(config);

  if(isValid == false) {
    throw new Error(error!);
  }

  return (
    <ChromaContext.Provider 
    value={{ scheme: colorMode, ...config }}>
      {children}
    </ChromaContext.Provider>
  );
}

export { ChromaProvider };