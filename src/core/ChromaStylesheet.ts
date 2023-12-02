import React from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

import { ChromaTheme } from "../types/theme";
import { ChromaContext } from "./ChromaContext";

export type NamedStyles<T> = {
  [P in keyof T]: Partial<ViewStyle | TextStyle | ImageStyle>;
}

const ChromaStyleSheet = {
  create<T>(callback: (theme: ChromaTheme) => NamedStyles<T>) {
    function useChromaStyle(): NamedStyles<T> {
      const theme = React.useContext(ChromaContext);
      return callback(theme);
    }

    return { useChromaStyle };
  }
}

export { ChromaStyleSheet };