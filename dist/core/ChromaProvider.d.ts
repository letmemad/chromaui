import React from "react";
import { ChromaTheme } from "../types/theme";
interface Properties {
    theme: ChromaTheme;
    children: React.ReactNode;
}
declare const ChromaProvider: React.FC<Properties>;
export { ChromaProvider };
