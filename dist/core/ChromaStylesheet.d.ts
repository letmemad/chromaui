import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { ChromaAccessibleConfig } from "../types/config";
export type NamedStyles<T> = {
    [P in keyof T]: Partial<ViewStyle | TextStyle | ImageStyle>;
};
declare const ChromaStyleSheet: {
    create<T>(callback: (config: ChromaAccessibleConfig) => NamedStyles<T>): {
        useChromaStyle: () => NamedStyles<T>;
    };
};
export { ChromaStyleSheet };
