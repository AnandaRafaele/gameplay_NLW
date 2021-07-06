import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { ImageBackground, View, Text, FlatList } from "react-native";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";

export const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/rodrigorgtic.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        keyExtractor={(item) => item.id}
        data={members}
        style={styles.members}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => <Member data={item} />}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};
