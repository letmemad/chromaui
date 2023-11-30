import React from "react";
const ChromaContext = React.createContext({
    scheme: "light",
    colors: {
        text: "",
        primary: "",
        secondary: "",
        background: "",
        placeholder: "",
    },
});
export { ChromaContext };
