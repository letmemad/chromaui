import React from "react";
import { ChromaContext } from "./ChromaContext";
const ChromaStyleSheet = {
    create(callback) {
        function useChromaStyle() {
            const theme = React.useContext(ChromaContext);
            return callback(theme);
        }
        return { useChromaStyle };
    }
};
export { ChromaStyleSheet };
