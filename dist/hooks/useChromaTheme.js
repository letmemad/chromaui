import React from "react";
import { ChromaContext } from "../core/ChromaContext";
function useChromaTheme() {
    const context = React.useContext(ChromaContext);
    return context;
}
export { useChromaTheme };
