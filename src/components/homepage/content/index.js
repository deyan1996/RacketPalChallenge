import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.typography}>
        Your App Store review{"\r\n"}greatly helps spread the word and{"\r\n"}
        grow the racket sports community!
      </Text>
    </View>
  );
};

export default Content;
