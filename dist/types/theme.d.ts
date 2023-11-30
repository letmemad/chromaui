import { ColorSchemeName } from "react-native";
export type ChromaColors = {
    text: string;
    primary: string;
    secondary: string;
    background: string;
    placeholder: string;
};
export type ChromaTheme = {
    scheme: ColorSchemeName;
    colors: ChromaColors;
};
