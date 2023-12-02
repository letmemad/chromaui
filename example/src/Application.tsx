import React from "react";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { ChromaProvider } from "@letmemad/chromaui";

import { dark } from "./theme/dark";
import { light } from "./theme/light";

import style from "./styles";

const Application: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme == "dark" ? dark : light;

  return (
    <ChromaProvider theme={theme}>
      <Component />
    </ChromaProvider>
  );
}

const Component: React.FC = () => {
  const styles = style.useChromaStyle();

  // Handlers
  function handleToggleStyles() {
    style.update({
      container: {
        backgroundColor: "red",
      },

      greetings: {
        color: "#EEE",
      },
    })
  }

  return (
    <View style={[styles.container]}>
      <TouchableOpacity>
        <Text style={styles.greetings}>
          Olá
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Application;