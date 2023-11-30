import React from "react";

import { ChromaColors } from "../types/theme";
import { ChromaContext } from "../core/ChromaContext";

function useChromaColors(): ChromaColors {
  const context = React.useContext(ChromaContext);
  return context.colors;
}

export { useChromaColors };