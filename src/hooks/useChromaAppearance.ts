import React from "react";
import { Appearance } from "react-native";

import { ChromaContext } from "../core/ChromaContext";
import { error } from "../utils/error";

export function useChromaAppearance() {
  const { mutate, config: { appearance, colors } } = React.useContext(ChromaContext);

  function toggleAppearance(mode: "light" | "dark" | "system") {
    const current = Appearance.getColorScheme();

    if(mode == current) {
      return;
    }

    if(mode == "dark" && (("dark" in colors) == false)) {
      if(__DEV__) {
        error.dispatch("Dark mode colors are not defined.");
      }

      return;
    }

    mutate({ appearance: mode });
  }

  return { appearance, toggleAppearance }
}