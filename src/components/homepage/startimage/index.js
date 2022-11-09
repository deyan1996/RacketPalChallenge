import React from "react";
import { View, Image } from "react-native";

import styles from "./style";

const StartImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/brand-img.png")}
        style={{ width: 246, height: 76 }}
      />
    </View>
  );
};

export default StartImage;
