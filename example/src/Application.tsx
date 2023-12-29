import React from "react";
import { ChromaProvider } from "@letmemad/chromaui";
import { Text, TouchableOpacity, View } from "react-native";

import style from "./styles";
import { config } from "./theme";

const Application: React.FC = () => {
  return (
    <ChromaProvider config={config}>
      <Component />
    </ChromaProvider>
  );
}

const Component: React.FC = () => {
  const styles = style.useChromaStyle();

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