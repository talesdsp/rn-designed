import { Block, Button, Text } from "expo-ui-kit/src";
import { COLORS, SIZES } from "expo-ui-kit/src/theme";
import { rgba } from "expo-ui-kit/src/utils";
import React from "react";
import { Modal, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { icons } from "../constants/Images";
import { servers } from "../constants/Servers";
import Theme from "../constants/Theme";

export default function Vpn() {
  const [connected, setConnected] = React.useState(false);
  const [server, setServer] = React.useState(null);
  const [showModal, setModal] = React.useState(false);

  const automatic = {
    name: "Automatic",
    icon: () => icons.automatic(),
  };
  const connection = server || automatic;

  const toggleVPN = (e) => {
    setConnected((boolean) => !boolean);
  };

  const openModal = () => {
    setModal((previous) => !previous);
  };
  const chooseServer = (item) => {
    setModal(false);
    setServer(item);
  };

  const renderServer = () => {
    return (
      <Block flex={false} row center middle>
        {connection.icon()}
        <Text margin={[0, 10]}> {connection.name}</Text>
        {icons.dropdown()}
      </Block>
    );
  };

  const renderAllServers = () => {
    const connection = server || automatic;

    return (
      <Modal visible={showModal} animationType="fade" transparent>
        <Block bottom>
          <Block flex={false} white>
            <Block center white flex={false} padding={[SIZES.padding, 0]}>
              <Text subtitle gray>
                Pick your server
              </Text>
            </Block>
            <ScrollView>
              {servers.map((item, index) => {
                const isConnected = connection.name === item.name;
                return (
                  <Button
                    key={`server-${index}`}
                    onPress={() => chooseServer(item)}
                    padding={[0, SIZES.padding]}
                    transparent
                  >
                    <Block row>
                      {item.icon()}
                      <Text padding={[0, 13]}>{item.name}</Text>
                      <Block row right>
                        {icons[isConnected ? "checked" : "unchecked"]()}
                      </Block>
                    </Block>
                  </Button>
                );
              })}
            </ScrollView>
          </Block>
        </Block>
      </Modal>
    );
  };

  return (
    <Block safe center space="between">
      <Block center middle>
        <Block
          flex={false}
          row
          center
          middle
          white
          shadow
          radius={20}
          padding={[SIZES.base, SIZES.padding]}
        >
          <Text subtitle semibold gray transform="capitalize">
            {connected ? "connected" : "disconnected"}
          </Text>
          <Block
            flex={false}
            radius={10}
            color={connected ? COLORS.success : rgba(COLORS.gray, 0.5)}
            style={styles.status}
          ></Block>
        </Block>

        {icons[connected ? "online" : "offline"]({ style: styles.image })}

        <Button
          outlined={connected}
          theme={Theme}
          primary
          flex={false}
          style={styles.connect}
          onPress={toggleVPN}
          margin={[SIZES.padding, 0, 0, 0]}
        >
          <Text white={!connected} caption center bold margin={[13, 0]} transform="uppercase">
            {connected ? "disconnect" : "connect now"}
          </Text>
        </Button>
      </Block>

      <Block flex={false} white middle style={styles.server}>
        <Button transparent onPress={openModal}>
          {renderServer()}
        </Button>
      </Block>

      {renderAllServers()}
    </Block>
  );
}

const styles = StyleSheet.create({
  connect: {
    width: SIZES.width / 2,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  status: {
    width: 8,
    height: 8,
    marginLeft: 10,
  },
  server: {
    width: SIZES.width,
    height: SIZES.base * 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.05,
    shadowRadius: SIZES.base / 2,
  },
});
