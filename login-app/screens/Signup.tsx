import { StackNavigationProp } from "@react-navigation/stack";
import { Block, Button, Input, theme, Utils } from "expo-ui-kit";
import React, { useState } from "react";
import { Alert, Image, StyleSheet } from "react-native";
import Checked from "../assets/images/checked.png";
import Eye from "../assets/images/eye.png";
import Facebook from "../assets/images/facebook.png";
import Google from "../assets/images/google.png";
import Unchecked from "../assets/images/unchecked.png";
import Text from "../components/Text";
import Theme from "../constants";
import { RootStackParamList } from "../navigation";

const { rgba } = Utils;
const { COLORS, SIZES } = theme;

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, "Signup">;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const Signup: React.FC<Props> = ({ navigation }) => {
  // Works on both Android and iOS

  const [valid, setValid] = useState(false);

  const validateEmail = () => {
    if (valid) {
      Alert.alert(
        "Welcome",
        "Congrats you registered",
        [{ text: "fine." }, { text: "Cancel", style: "cancel" }, { text: "AWESOME" }],
        { cancelable: true }
      );
      return navigation.goBack();
    }

    return Alert.alert("Email is wrong..", "Can you fix it?", [{ text: "OK" }], {
      cancelable: true,
    });
  };

  const [isSecure, setSecure] = useState(true);
  const [isChecked, setCheck] = useState(true);
  const [open, setOpen] = useState(false);

  const goHigh = () => {
    setOpen(true);
  };
  const goDown = () => {
    setOpen(false);
  };

  return (
    <Block animated safe white margin={[open ? "-50%" : 0, 0, 0, 0]}>
      <Text h2 color={rgba(COLORS.gray, 0.6)} padding={SIZES.padding}>
        Login Now
      </Text>
      <Text
        subtitle
        color={rgba(COLORS.gray, 0.6)}
        padding={[0, SIZES.padding]}
        margin={[0, 0, 89, 0]}
      >
        Please login to continue using our app.
      </Text>

      <Block center middle flex={false}>
        <Text caption>Login instantly</Text>

        <Block row flex={false} space="evenly" margin={[13, SIZES.padding]}>
          <Button
            outlined
            color={rgba(COLORS.gray, 0.2)}
            style={{ flex: 1 }}
            margin={[0, SIZES.padding, 0, 0]}
          >
            <Text center>
              <Image source={Facebook} />
            </Text>
          </Button>
          <Button outlined color={rgba(COLORS.gray, 0.2)} style={{ flex: 1 }}>
            <Text center>
              <Image source={Google} />
            </Text>
          </Button>
        </Block>

        <Text caption>or login with email/mobile</Text>
      </Block>

      <Block margin={[SIZES.padding * 3, 0]}>
        <Text subtitle color={rgba(COLORS.gray, 0.6)} padding={[0, SIZES.padding]}>
          E-mail ID or Mobile Number
        </Text>

        <Block margin={[0, SIZES.padding, SIZES.padding]} center middle flex={false}>
          <Input
            style={style.input}
            onFocus={goHigh}
            onBlur={goDown}
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            onValidation={(isValid) => setValid(isValid)}
          />
        </Block>

        <Text subtitle color={rgba(COLORS.gray, 0.6)} padding={[0, SIZES.padding]}>
          Password
        </Text>

        <Block margin={[0, SIZES.padding, SIZES.padding]} center middle row white flex={false}>
          <Input secureTextEntry={isSecure} style={style.input} onFocus={goHigh} onBlur={goDown} />
          <Button
            onPress={() => setSecure((prev) => !prev)}
            style={style.eye}
            padding={[0, SIZES.padding]}
            transparent
          >
            <Image source={Eye} />
          </Button>
        </Block>

        <Block row space="between" margin={[0, SIZES.padding, SIZES.padding]} flex={false} center>
          <Block row center>
            <Button onPress={() => setCheck((prev) => !prev)} transparent>
              <Image source={isChecked ? Checked : Unchecked} style={{ resizeMode: "contain" }} />
            </Button>
            <Text caption margin={[0, 0, 0, 5]}>
              Remember me
            </Text>
          </Block>
          <Text caption primary theme={Theme}>
            Forgot password
          </Text>
        </Block>

        <Button
          primary
          center
          middle
          theme={Theme}
          style={{ borderRadius: 50 }}
          margin={[0, SIZES.padding]}
          onPress={() => validateEmail()}
        >
          <Text subtitle center white>
            Login to my account
          </Text>
        </Button>
        <Block row middle flex={false} margin={SIZES.padding / 1.5}>
          <Text caption color={rgba(COLORS.gray, 0.4)} margin={[0, 5, 0, 0]}>
            Dont Have an account?
          </Text>
          <Text caption primary>
            Register
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Signup;

const style = StyleSheet.create({
  eye: {
    flex: 0,
    marginLeft: -SIZES.padding * 2.7,
    zIndex: 101,
  },
  input: {
    width: "100%",
    zIndex: 100,
  },
});
