import React from "react";
import { Image } from "react-native";
import { background } from "../constants/Images";

export default function Welcome() {
  return (
    <Block safe>
      <Block center middle>
        <Image
          source={background.welcome}
          resizeMode="center"
          style={{ width: "75%", height: "100%" }}
        />
      </Block>
      <Block flex={0} center bottom margin={60}>
        <Text h3 semibold>
          Secured, Forever.
        </Text>
        <Text h3 semibold center caption gray margin={[10, 0]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta in eos, doloremque eligendi
          et rerum beatae facere ut assumenda at, autem quaerat soluta consectetur ipsum?
          Accusantium recusandae quas rem possimus.
        </Text>
        <Button primary>
          <Text center white caption bold margin={[5, 21]}>
            GET STARTED
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({});
