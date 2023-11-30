import React from "react";

import { ChromaContext } from "./ChromaContext";
import { ChromaTheme } from "../types/theme";

interface Properties {
  theme: ChromaTheme;
  children: React.ReactNode;
}

const ChromaProvider: React.FC<Properties> = ({ children, theme }) => {
  return (
    <ChromaContext.Provider value={theme}>
      {children}
    </ChromaContext.Provider>
  );
}

export { ChromaProvider };