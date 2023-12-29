import React from "react";
import { ChromaContext } from "../core/ChromaContext";
function useChromaConfig() {
    const context = React.useContext(ChromaContext);
    return context;
}
export { useChromaConfig };
