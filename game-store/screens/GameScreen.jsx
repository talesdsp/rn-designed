import { Ionicons } from "@expo/vector-icons"
import React from "react"
import { Animated, StatusBar } from "react-native"
import styled from "styled-components/native"
import Text from "../components/Text"

const GameScreen = ({ route, navigation }) => {
  const { game } = route.params

  const renderStars = () => {
    let stars = []
    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"}
        />
      )
    }

    return <Stars>{stars}</Stars>
  }

  return (
    <GameContainer>
      <StatusBar barStyle="light-content" />

      <Animated.ScrollView>
        <GameArtContainer>
          <GameArt source={game.cover} />
          <BackButton onPress={() => navigation.goBAck()}>
            <Ionicons name="ios-close" size={40} color="#fff" />
          </BackButton>
        </GameArtContainer>

        <GameInfoContainer>
          <GameThumbContainer>
            <GameThumb source={game.cover} />
          </GameThumbContainer>

          <GameInfo>
            <Text heavy medium>
              {game.title}
            </Text>
            <Text color="#9a9a9a">{game.teaser}</Text>
          </GameInfo>

          <Download>
            <Ionicons name="md-cloud-download" size={24} color="#fff" />
          </Download>
        </GameInfoContainer>

        <GameStatsContainer>
          {renderStars()}
          <Text heavy color="#9a9a9a">
            {game.rating}
          </Text>
          <Text bold color="#9a9a9a">
            {game.category[0]}
          </Text>
          <Text bold color="#9a9a9a">
            {game.age}
          </Text>
          <Text bold color="#9a9a9a">
            Game of the day
          </Text>
        </GameStatsContainer>

        <ScreenshotsContainer>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={300}
            snapToAlignment="center"
            decelerationRate={"normal"}
            scrollEventThrottle={16}
          >
            {game.screenshots.map((shot, index) => (
              <ScreenshotContainer key={index} first={index == 0 ? true : false}>
                <Screenshot source={shot} />
              </ScreenshotContainer>
            ))}
          </Animated.ScrollView>
        </ScreenshotsContainer>

        <Description medium color="#9a9a9a">
          {game.description}
        </Description>
      </Animated.ScrollView>
    </GameContainer>
  )
}

export default GameScreen

const GameContainer = styled.SafeAreaView`
  background-color: #343434;
`
const GameArtContainer = styled.View`
  position: relative;
`
const GameArt = styled.Image`
  height: 300px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 16px;
`

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`
const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`

const GameThumbContainer = styled.View`
  border-radius: 12px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-radius: 8px;
  shadow-opacity: 0.1;
  elevation: 5;
`

const GameThumb = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`
const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`

const Stars = styled.View`
  flex-direction: row;
`

const ScreenshotsContainer = styled.View``

const ScreenshotContainer = styled.View`
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: ${(props) => (props.first ? 20 : 0)}px;
  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-radius: 8px;
  shadow-opacity: 0.1;
  elevation: 5;
  border-radius: 12px;
`

const Screenshot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
`

const Description = styled(Text)`
  margin: 0 16px 16px;
  line-height: 22px;
`
