import { PixelRatio } from "react-native";
import { ChromaStyleSheet } from "@letmemad/chromaui";

export default ChromaStyleSheet.create(({ colors }) => ({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.light,
  },

  greetings: {
    color: colors.primary.heavy,
    fontSize: PixelRatio.getFontScale() * 20,
  },
}));