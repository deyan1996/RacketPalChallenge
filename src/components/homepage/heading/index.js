import React from "react";
import { View, Text } from "react-native";

import styles from "./style";

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.typography}>Enjoying RacketPal?</Text>
    </View>
  );
};

export default Heading;
