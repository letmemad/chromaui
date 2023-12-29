import { ChromaConfig } from "@letmemad/chromaui";

export const config: ChromaConfig = ({
  withDarkMode: false,
  initialColorMode: "light",
  colors: {
    light: {
      text: {
        lower: "#5d5d5d",
        medium: "#3d3d3d",
        regular: "#454545",
        default: "#000000"
      },
      background: {
        lower: "#bdbdbd",
        medium: "#dcdcdc",
        regular: "#efefef",
        default: "#ffffff",
      },
      primary: {
        lower: "#feccaa",
        medium: "#fb8a3c",
        regular: "#fdac74",
        default: "#f97316"
      },
    },
    dark: {
      text: {
        lower: "#292929",
        medium: "#bdbdbd",
        regular: "#efefef",
        default: "#ffffff"
      },
      background: {
        lower: "#000000",
        medium: "#3d3d3d",
        regular: "#454545",
        default: "#000000",
      },
      primary: {
        lower: "#feccaa",
        medium: "#fb8a3c",
        regular: "#fdac74",
        default: "#f97316"
      },
    }
  },
});