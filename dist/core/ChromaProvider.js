import React from "react";
import { ChromaContext } from "./ChromaContext";
const ChromaProvider = ({ children, theme }) => {
    return (React.createElement(ChromaContext.Provider, { value: theme }, children));
};
export { ChromaProvider };
