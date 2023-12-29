import React from "react";
import { ChromaConfig } from "../types/config";
import { ChromaContext } from "../core/ChromaContext";

function useChromaConfig(): ChromaConfig {
  const context = React.useContext(ChromaContext);
  return context;
}

export { useChromaConfig };