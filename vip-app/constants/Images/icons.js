import React from "react";
import Australia from "../../assets/svg/icon/australia.svg";
import Auto from "../../assets/svg/icon/automatic.svg";
import Checked from "../../assets/svg/icon/checked.svg";
import Dropdown from "../../assets/svg/icon/dropdown.svg";
import India from "../../assets/svg/icon/india.svg";
import Offline from "../../assets/svg/icon/offline.svg";
import Online from "../../assets/svg/icon/online.svg";
import Russia from "../../assets/svg/icon/russia.svg";
import Singapore from "../../assets/svg/icon/singapore.svg";
import Sweden from "../../assets/svg/icon/sweden.svg";
import Uk from "../../assets/svg/icon/uk.svg";
import Unchecked from "../../assets/svg/icon/unchecked.svg";
import Us from "../../assets/svg/icon/us.svg";

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
