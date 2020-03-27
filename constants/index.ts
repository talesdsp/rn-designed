import { mergeTheme, theme } from "expo-ui-kit/src/utils";

const myTheme = {
  COLORS: {
    primary: "#5f85e5",
  },
};

const Theme = mergeTheme(theme, myTheme);

export default Theme;
