import React from "react";
import { ChromaContext } from "../core/ChromaContext";
function useChromaColors() {
    const context = React.useContext(ChromaContext);
    return context.colors;
}
export { useChromaColors };
