import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./style";

const RateButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ratebutton}>
        <Text style={styles.typography}>Rate us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RateButton;
