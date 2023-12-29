export type ChromaColorLevels = {
  lower: string;
  medium: string;
  regular: string;
  default: string;
}

export type ChromaCommonColors = {
  text: ChromaColorLevels;
  primary: ChromaColorLevels;
  background: ChromaColorLevels;
}

export interface ChromaColors extends ChromaCommonColors {
  [x: string]: ChromaColorLevels;
}