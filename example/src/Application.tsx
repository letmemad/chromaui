import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChromaProvider, useChromaAppearance, useChromaColors } from "@letmemad/chromaui";

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
  const { colors } = useChromaColors();
  const { toggleAppearance } = useChromaAppearance();

  const styles = style.useChromaStyle();

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => toggleAppearance("system")}>
        <Text style={styles.greetings}>
          Olá
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Application;