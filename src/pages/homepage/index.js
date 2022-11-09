import react from "react";
import { View } from "react-native";

import StartImage from "../../components/homepage/startimage";
import Heading from "../../components/homepage/heading";
import Content from "../../components/homepage/content";
import RateButton from "../../components/homepage/ratebutton";
import Feedback from "../../components/homepage/feedback";
import CloseButton from "../../components/homepage/closebutton";

import styles from "./style";

const Homepage = () => {
  return (
    <View style={styles.container}>
      <CloseButton style={{ visibility: "hidden" }} />
      <StartImage />
      <Heading />
      <Content />
      <RateButton />
      <Feedback />
    </View>
  );
};

export default Homepage;
