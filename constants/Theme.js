import { mergeTheme, theme } from "expo-ui-kit/src/utils";

const myTheme = {
  COLORS: {
    primary: "#1e90ff",
  },
  SIZES: {},
};

const Theme = mergeTheme(theme, myTheme);

export default Theme;
