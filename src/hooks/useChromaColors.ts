import React from "react";
import { useColorScheme } from "react-native";
import { ChromaContext } from "../core/ChromaContext";

function useChromaColors() {
  const system = useColorScheme() ?? "light";
  const { config } = React.useContext(ChromaContext);

  switch(config.appearance) {
    case "system": {
      const isDark = system == "dark";
      const colors = config.colors[system]!;

      return { isDark, colors }
    }

    case "dark": {
      const isDark = true;
      const colors = config.colors.dark!;

      return { isDark, colors }
    }

    default: {
      const isDark = false;
      const colors = config.colors.light;

      return { isDark, colors }
    }
  }
}

export { useChromaColors };