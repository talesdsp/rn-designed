import { loadAsync } from "expo-font";
import { Block } from "expo-ui-kit";
import React from "react";
import { ActivityIndicator } from "react-native";
import Navigation from "./navigation";

const App: React.FC = () => {
  const [fontLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function go() {
      try {
        await loadAsync({
          "Montserrat-R": require("./assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-B": require("./assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-BI": require("./assets/fonts/Montserrat-BoldItalic.ttf"),
          "Montserrat-I": require("./assets/fonts/Montserrat-Italic.ttf"),
        });

        setLoaded(true);
      } catch (err) {
        console.warn(err);
      }
    }
    go();
  }, []);

  if (!fontLoaded) {
    return (
      <Block safe center middle>
        <ActivityIndicator size="large" />
      </Block>
    );
  }

  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
