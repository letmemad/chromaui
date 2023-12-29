// import { ChromaFonts } from "./fonts";
import { ChromaColors } from "./colors";

export type ChromaConfig = {
  initialColorMode?: "light" | "dark" | "system";
  // initialFontFamily?: string;

  colors: {
    light: ChromaColors;
    dark?: ChromaColors;
  }

  // fonts?: Record<string, ChromaFonts>;
}

export type ChromaAccessibleConfig = {
  colors: ChromaColors;
  // fonts?: Record<string, ChromaFonts>;
}