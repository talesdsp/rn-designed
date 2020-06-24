import { Block, Button, Text } from "expo-ui-kit/src";
import { COLORS, SIZES } from "expo-ui-kit/src/theme";
import React from "react";
import { Animated, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { background } from "../constants/Images";
import Theme from "../constants/Theme";

const backgrounds = [
  {
    id: 1,
    title: "Secured, forever.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: (props) => background.welcome(props),
  },
  {
    id: 2,
    title: "Tracking? No more.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: (props) => background.umbrella(props),
  },
  {
    id: 3,
    title: "The web guard you ever wanted",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis molestiae sed fuga est commodi voluptatibus perferendis debitis nemo labore.",
    img: (props) => background.guard(props),
  },
];

export default function Welcome({ navigation }) {
  scrollX = new Animated.Value(0);

  const renderImages = () => {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate={"normal"}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
      >
        {backgrounds.map((item, index) => (
          <Block key={`img-${index}`} center bottom style={{ width: SIZES.width }}>
            {item.img({ width: SIZES.width, height: SIZES.width })}
            <Text h3 semibold padding={[13, 0, 0, 0]}>
              {item.title}
            </Text>
            <Text h3 semibold center caption gray margin={[13, SIZES.padding, 0]}>
              {item.description}
            </Text>
          </Block>
        ))}
      </ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <Block flex={false} row center middle margin={[21, 0, 34, 0]}>
        {backgrounds.map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Block
              key={`dot-${index}`}
              flex={false}
              gray
              animated
              margin={[0, 5]}
              radius={100}
              style={{ width: 8, height: 8, opacity }}
              color={COLORS.gray}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block safe>
      <Block>{renderImages()}</Block>
      <Block flex={false} center bottom margin={[0, 0, 55, 0]}>
        {renderDots()}
        <Button primary theme={Theme} onPress={() => navigation.navigate("VPN")}>
          <Text center white caption bold margin={[5, 55]}>
            GET STARTED
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({});
