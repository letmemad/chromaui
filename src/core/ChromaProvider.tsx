import React from "react";

import { error } from "../utils/error";
import { ChromaConfig } from "../types/config";
import { ChromaContext } from "./ChromaContext";

interface Properties {
  config: ChromaConfig;
  children: React.ReactNode;
}

type Reducer = React.Reducer<ChromaConfig, Partial<ChromaConfig>>;

function reducer<T>(state: T, mutation: Partial<T>): T {
  return { ...state, ...mutation };
}

const ChromaProvider: React.FC<Properties> = (props) => {
  // Main state
  const [config, mutate] = React.useReducer<Reducer>(reducer, props.config);
  
  if(Object.keys(config ?? {}).length == 0) {
    error.dispatch("Config is not defined.");
  }

  const appearance = config.appearance;
  const isDarkColorsDefined = config.colors.dark != undefined;

  if(appearance != "light" && isDarkColorsDefined == false) {
    error.dispatch("Dark mode colors are not defined.");
  }

  return (
    <ChromaContext.Provider value={{ config, mutate }}>
      {props.children}
    </ChromaContext.Provider>
  );
}

export { ChromaProvider };