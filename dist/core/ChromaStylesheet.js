import React from "react";
import { ChromaContext } from "./ChromaContext";
const ChromaStyleSheet = {
    create(callback) {
        function useChromaStyle() {
            const config = React.useContext(ChromaContext);
            const colors = config.colors[config.scheme];
            return callback({ colors });
        }
        return { useChromaStyle };
    }
};
export { ChromaStyleSheet };
