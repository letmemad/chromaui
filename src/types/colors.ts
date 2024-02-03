export type ChromaColorLevels = {
  light: string;
  medium: string;
  heavy: string;
}

export type ChromaCommonColors = {
  text: ChromaColorLevels;
  primary: ChromaColorLevels;
  background: ChromaColorLevels;
}

export type ChromaColors<T = any> = ChromaCommonColors & {
  [P in keyof T]: ChromaColorLevels;
}