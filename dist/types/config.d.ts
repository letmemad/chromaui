import { ChromaColors } from "./colors";
export type ChromaConfig = {
    initialColorMode?: "light" | "dark" | "system";
    colors: {
        light: ChromaColors;
        dark?: ChromaColors;
    };
};
export type ChromaAccessibleConfig = {
    colors: ChromaColors;
};
