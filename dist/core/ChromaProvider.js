import React from "react";
import { useColorScheme } from "react-native";
import { ChromaContext } from "./ChromaContext";
import { validateChromaConfig } from "../utils/validateChromaConfig";
const ChromaProvider = ({ children, config }) => {
    const scheme = useColorScheme() ?? "light";
    const colorMode = config.initialColorMode == "system" ? scheme : (config.initialColorMode ?? "light");
    const { error, isValid } = validateChromaConfig(config);
    if (isValid == false) {
        throw new Error(error);
    }
    return (React.createElement(ChromaContext.Provider, { value: { scheme: colorMode, ...config } }, children));
};
export { ChromaProvider };
