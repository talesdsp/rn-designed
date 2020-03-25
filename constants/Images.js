import React from "react";
import Australia from "../assets/svgs/australia.svg";
import Auto from "../assets/svgs/automatic.svg";
import Checked from "../assets/svgs/checked.svg";
import Dropdown from "../assets/svgs/dropdown.svg";
import India from "../assets/svgs/india.svg";
import Offline from "../assets/svgs/offline.svg";
import Online from "../assets/svgs/online.svg";
import Russia from "../assets/svgs/russia.svg";
import Singapore from "../assets/svgs/singapore.svg";
import Sweden from "../assets/svgs/sweden.svg";
import Uk from "../assets/svgs/uk.svg";
import Unchecked from "../assets/svgs/unchecked.svg";
import Us from "../assets/svgs/united-states.svg";
import Hero from "../assets/svgs/welcome.svg";

export const background = {
  welcome: (props) => <Hero {...props} />,
  // encrypted: require("../assets/images/encrypted"),
  // privacy: require("../assets/images/privacy"),
};
export const icons = {
  //buttons
  checked: (props) => <Checked {...props} />,
  unchecked: (props) => <Unchecked {...props} />,

  dropdown: (props) => <Dropdown {...props} />,
  offline: (props) => <Offline {...props} />,
  online: (props) => <Online {...props} />,

  //countries
  automatic: (props) => <Auto {...props} />,
  us: (props) => <Us {...props} />,
  india: (props) => <India {...props} />,
  singapore: (props) => <Singapore {...props} />,
  sweden: (props) => <Sweden {...props} />,
  russia: (props) => <Russia {...props} />,
  australia: (props) => <Australia {...props} />,
  uk: (props) => <Uk {...props} />,
};

// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
