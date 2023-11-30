import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { ChromaTheme } from "../types/theme";
export type NamedStyles<T> = {
    [P in keyof T]: Partial<ViewStyle | TextStyle | ImageStyle>;
};
declare const ChromaStyleSheet: {
    create<T>(callback: (theme: ChromaTheme) => NamedStyles<T>): {
        useChromaStyle: () => NamedStyles<T>;
    };
};
export { ChromaStyleSheet };
