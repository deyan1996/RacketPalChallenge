import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

const CloseButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CloseButton;
