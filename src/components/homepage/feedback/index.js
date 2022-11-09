import React from "react";
import { View, Text, Linking } from "react-native";

import styles from "./style";

const Feedback = () => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => Linking.openURL("http://google.com")}
        style={styles.typography}
      >
        Not yet? Give us feedback
      </Text>
    </View>
  );
};

export default Feedback;
