import { PixelRatio } from "react-native";
import { ChromaStyleSheet } from "@letmemad/chromaui";

export default ChromaStyleSheet.create(({ colors }) => ({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.default,
  },

  greetings: {
    color: colors.primary.default,
    fontSize: PixelRatio.getFontScale() * 20,
  },
}));