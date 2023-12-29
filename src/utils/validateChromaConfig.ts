import { ChromaConfig } from "../types/config";

export function validateChromaConfig(config: ChromaConfig) {
  const identifier = "[ChromaUI] ";

  if(Object.keys(config ?? {}).length == 0) {
    const isValid = false;
    const error = identifier + "Config are not defined.";

    return { isValid, error }
  }

  const initialColorMode = config.initialColorMode;
  const isDarkColorsDefined = config.colors.dark != undefined;

  if(initialColorMode != "light" && isDarkColorsDefined == false) {
    const isValid = false;
    const error = identifier + "Dark mode colors are not defined. If you don't want to use it, set the 'initialColorMode' to light";
    
    return { isValid, error }
  }

  return { isValid: true, error: null };
}