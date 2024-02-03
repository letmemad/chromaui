import React from "react";
import { ChromaConfig } from "../types/config";

interface Context {
  config: ChromaConfig;
  mutate(config: Partial<ChromaConfig>): void;
}

const ChromaContext = React.createContext<Context>({
  mutate: () => {},
  config: {
    appearance: "system",
    colors: {
      light: {
        text: {
          light: "#f6f6f6",
          medium: "#6d6d6d",
          heavy: "#000000"
        },
        background: {
          light: "#ffffff",
          medium: "#7c7c7c",
          heavy: "#292929",
        },
        primary: {
          light: "#aeaaff",
          medium: "#6144ff",
          heavy: "#170372"
        },
      }
    },
  },
});

export { ChromaContext };