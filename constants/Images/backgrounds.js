import React from "react";
import Guard from "../assets/svg/background/security-guard.svg";
import Umbrella from "../assets/svg/background/umbrella-radar.svg";
import Hero from "../assets/svg/background/welcome.svg";

export const background = {
  welcome: (props) => <Hero {...props} />,
  guard: (props) => <Guard {...props} />,
  umbrella: (props) => <Umbrella {...props} />,
};
