import React from "react";

import { ChromaTheme } from "../types/theme";
import { ChromaContext } from "../core/ChromaContext";

function useChromaTheme(): ChromaTheme {
  const context = React.useContext(ChromaContext);
  return context;
}

export { useChromaTheme };