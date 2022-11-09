import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Homepage from "./src/pages/homepage";

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2B2B2",
    alignItems: "center",
    justifyContent: "center",
  },
});
