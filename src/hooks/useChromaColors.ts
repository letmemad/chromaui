import React from "react";
import { ChromaContext } from "../core/ChromaContext";

function useChromaColors() {
  const context = React.useContext(ChromaContext);
  const isDark = context.scheme == "dark";

  if(isDark) {
    const darkColors = context.colors.dark!;
    return darkColors;
  }

  const lightColors = context.colors.light;
  return lightColors;
}

export { useChromaColors };