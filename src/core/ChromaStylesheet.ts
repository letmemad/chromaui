import React from "react";
import { ViewStyle, TextStyle, ImageStyle, useColorScheme } from "react-native";

import { ChromaContext } from "./ChromaContext";
import { ChromaAccessibleConfig } from "../types/config";

export type NamedStyles<T> = {
  [P in keyof T]: Partial<ViewStyle | TextStyle | ImageStyle>;
}

const ChromaStyleSheet = {
  create<T>(callback: (config: ChromaAccessibleConfig) => NamedStyles<T>) {
    function useChromaStyle(): NamedStyles<T> {
      const systemAppearance = useColorScheme() ?? "light";
      const { config } = React.useContext(ChromaContext);

      const scheme = config.appearance == "system" ? systemAppearance : config.appearance;

      return callback({
        isDark: scheme == "dark",
        colors: config.colors[scheme]!,
      });
    }

    return { useChromaStyle };
  }
}

export { ChromaStyleSheet };