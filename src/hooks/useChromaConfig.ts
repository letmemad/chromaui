import React from "react";
import { ChromaConfig } from "../types/config";
import { ChromaContext } from "../core/ChromaContext";

function useChromaConfig(): ChromaConfig {
  const { config } = React.useContext(ChromaContext);
  return config;
}

export { useChromaConfig };