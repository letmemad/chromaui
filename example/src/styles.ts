import { PixelRatio } from "react-native";
import { ChromaStyleSheet } from "@letmemad/chromaui";

export default ChromaStyleSheet.create((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },

  greetings: {
    color: theme.colors.text,
    fontSize: PixelRatio.getFontScale() * 20,
  },
}));