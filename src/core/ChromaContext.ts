import React from "react";

import { ChromaTheme } from "../types/theme";

const ChromaContext = React.createContext<ChromaTheme>({
  scheme: "light",
  colors: {
    text: "",
    primary: "",
    secondary: "",
    background: "",
    placeholder: "",
  },
});

export { ChromaContext };