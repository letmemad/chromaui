import React from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { ChromaContext } from "./ChromaContext";
import { ChromaAccessibleConfig } from "../types/config";

export type NamedStyles<T> = {
  [P in keyof T]: Partial<ViewStyle | TextStyle | ImageStyle>;
}

const ChromaStyleSheet = {
  create<T>(callback: (config: ChromaAccessibleConfig) => NamedStyles<T>) {
    function useChromaStyle(): NamedStyles<T> {
      const config = React.useContext(ChromaContext);
      const colors = config.colors[config.scheme]!;

      return callback({ colors });
    }

    return { useChromaStyle };
  }
}

export { ChromaStyleSheet };