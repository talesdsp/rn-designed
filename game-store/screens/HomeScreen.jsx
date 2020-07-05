import React, { useState } from "react"
import { StatusBar } from "react-native"
import styled from "styled-components/native"
import categoryList from "../categories"
import Text from "../components/Text"
import games from "../game-data"

const HomeScreen = () => {
  const [selected, setSelected] = useState("All")

  const changeCategory = (category) => () => setSelected(category)

  const GameItem = (game) => (
    <Game>
      <GameCover source={game.cover} />
      <GameInfo backgroundColor={game.backgroundColor}>
        <GameImage source={game.cover} />
        <GameTitle>
          <Text>{game.title}</Text>
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
        data={games}
        keyExtractor={(game) => String(game.id)}
        renderItem={({ item }) => GameItem(item)}
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
  margin: auto;
  margin-bottom: 32px;
  width: 85%;
  border-radius: 12px;
  overflow: hidden;
`

const GameCover = styled.Image`
  width: 100%;
`

const GameInfo = styled.View`
  padding: 20px;
`

const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 8px;
`

const GameTitle = styled.View``
