import Typography from "expo-ui-kit/src/Text.js";
import React from "react";
import { StyleSheet } from "react-native";
import Theme from "../constants";

interface Props {
  color?: String;
  margin?: Number[] | Number;
  padding?: Number[] | Number;
  center?: Boolean;
  h1?: Boolean;
  h2?: Boolean;
  h3?: Boolean;
  uppercase?: Boolean;
  middle?: Boolean;
  white?: Boolean;
  gray?: Boolean;
  primary?: Boolean;
  caption?: Boolean;
  subtitle?: Boolean;
  weight?: String;
  theme?: {};
  style?: {};
  children?: React.ReactNode | String;
}

const Text: React.FC<Props> = (props) => {
  return (
    <Typography {...props} theme={Theme} style={styles.font}>
      {props.children}
    </Typography>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Montserrat-R",
  },
});

export default Text;
