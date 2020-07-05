import React, { useRef, useState } from "react"
import { StatusBar } from "react-native"
import styled from "styled-components/native"
import categoryList from "../categories"
import Text from "../components/Text"
import games from "../game-data"

const HomeScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("All")

  const gamesRef = useRef()

  const changeCategory = (category) => () => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0, animated: true })
    setSelected(category)
  }

  const seeGame = (game) => () => navigation.navigate("GameScreen", { game })

  const GameItem = (game) => (
    <Game onPress={seeGame(game)}>
      <GameCover source={game.cover} />
      <GameInfo backgroundColor={game.backgroundColor}>
        <GameImage source={game.cover} />
        <GameTitle>
          <Text medium bold>
            {game.title}
          </Text>
          <Text>{game.teaser}</Text>
        </GameTitle>
      </GameInfo>
    </Game>
  )
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text>
          Hello
          <Text large bold>
            User,
          </Text>
          {"\n"}
          <Text large bold>
            Best games for today
          </Text>
        </Text>

        <Avatar source={require("../assets/images/identicon.png")} />
      </Header>

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => (
          <Category key={index} onPress={changeCategory(category)}>
            <CategoryName selected={selected === category ? !0 : !!0}>{category}</CategoryName>
            {selected === category && <CategoryDot />}
          </Category>
        ))}
      </Categories>

      <Games
        data={games.filter((game) => game.category.includes(selected) || selected === "All")}
        keyExtractor={(game) => String(game.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  )
}

export default HomeScreen

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`

const CategoryName = styled(Text)`
  color: ${({ selected }) => (selected ? "#819ee5" : "#9a9a9a")};
  font-weight: ${({ selected }) => (selected ? "700" : "500")};
`

const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`

const Games = styled.FlatList`
  margin-top: 32px;
  flex: 1;
`

const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`

const GameCover = styled.Image`
  width: 100%;
`

const GameInfo = styled.View`
  padding: 20px;
  margin: -50px auto 0;
  width: 90%;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`

const GameImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`

const GameTitle = styled.View`
  margin: 0 24px;
`
