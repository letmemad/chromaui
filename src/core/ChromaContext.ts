import React from "react";
import { ChromaConfig } from "../types/config";

interface Context extends Omit<ChromaConfig, "colorMode"> {
  scheme: "light" | "dark";
}

const ChromaContext = React.createContext<Context>({
  scheme: "light",
  colors: {
    light: {
      text: {
        lower: "#f6f6f6",
        medium: "#6d6d6d",
        regular: "#888888",
        default: "#000000"
      },
      background: {
        lower: "#ffffff",
        medium: "#7c7c7c",
        regular: "#989898",
        default: "#292929",
      },
      primary: {
        lower: "#aeaaff",
        medium: "#6144ff",
        regular: "#877aff",
        default: "#170372"
      },
    }
  },
});

export { ChromaContext };