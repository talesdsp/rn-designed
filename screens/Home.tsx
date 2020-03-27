import { StackNavigationProp } from "@react-navigation/stack";
import { Block, Button, theme, Utils } from "expo-ui-kit";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Facebook from "../assets/images/facebook.png";
import Google from "../assets/images/google.png";
import Bg from "../assets/images/home-bg.png";
import Text from "../components/Text";
import Theme from "../constants";
import { RootStackParamList } from "../navigation";

const { rgba } = Utils;
const { COLORS, SIZES } = theme;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Block safe white>
      <Block flex={false} padding={[144, 0, 34]} center middle>
        <Text uppercase h2>
          Get started now
        </Text>
      </Block>

      <Block center flex={false} margin={[13, 0]}>
        <Image source={Bg} style={style.img} />
      </Block>

      <Button center middle row color={rgba(COLORS.gray, 0.05)} style={style.buttons}>
        <Text subtitle center>
          <Image source={Facebook} /> Continue with Facebook
        </Text>
      </Button>

      <Button center middle row color={rgba(COLORS.gray, 0.05)} style={style.buttons}>
        <Text subtitle center>
          <Image source={Google} /> Continue with Google
        </Text>
      </Button>

      <Block margin={[13, 0]}>
        <Button
          primary
          center
          middle
          theme={Theme}
          style={style.buttons}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text subtitle center white>
            Signup with Email
          </Text>
        </Button>
        <Block row middle flex={false} margin={SIZES.padding / 2}>
          <Text caption color={rgba(COLORS.gray, 0.4)} margin={[0, 5]}>
            Existing user?
          </Text>
          <Text caption primary theme={Theme}>
            Login now
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Home;

const style = StyleSheet.create({
  buttons: {
    marginHorizontal: SIZES.padding * 2,
    marginVertical: 8,
    borderRadius: 55,
  },
  img: {
    width: "80%",
    height: SIZES.width * 0.8,
    resizeMode: "contain",
  },
});
