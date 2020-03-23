import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Block from "../components/Block";
import Text from "../components/Text";
import { images, theme } from "../constants/";

const { background } = images;
const { COLORS, SIZES } = theme;

const backgrounds = [
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: background.image,
  },
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: background.image,
  },
  {
    title: "Secured, forever.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: background.image,
  },
];

export default function Welcome({ navigation }) {
  const renderImages = () => (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
    >
      {backgrounds.map((item, index) => (
        <Block key={`img-${index}`} center bottom style={{ width: SIZES.width }}>
          <Image source={item.img} resizeMode="center" style={{ width: "75%", height: "100%" }} />
        </Block>
      ))}
    </ScrollView>
  );

  const renderDots = () => (
    <Block flex={false} row center middle margin={[20, 0, 40, 0]}>
      {[...Array(3)].map((_, index) => (
        <Block
          key={`dot-${index}`}
          flex={false}
          gray
          margin={[0, 5]}
          radius={3}
          style={{ width: 8, height: 8 }}
          color={rgba(COLORS.gray, 0.5)}
        />
      ))}
    </Block>
  );

  return (
    <Block safe>
      <Block center middle>
        {renderImages()}
      </Block>
      <Block flex={0} center bottom margin={60}>
        <Text h3 semibold></Text>
        <Text h3 semibold center caption gray margin={[10, 0]}></Text>

        {renderDots()}

        <Button primary onPress={() => navigation.navigate("VPN")}>
          <Text center white caption bold margin={[5, 21]}>
            GET STARTED
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({});
