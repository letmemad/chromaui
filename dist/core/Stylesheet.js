import React from "react";
import { ChromaContext } from "./ChromaContext";
const ChromaStyleSheet = {
    create(callback) {
        function useChromaStyle() {
            const theme = React.useContext(ChromaContext);
            return callback(theme);
        }
        function update(style) {
            return style;
        }
        return { useChromaStyle, update };
    }
};
export { ChromaStyleSheet };
