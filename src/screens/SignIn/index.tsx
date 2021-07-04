import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas jogatinas {"\n"}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
};
