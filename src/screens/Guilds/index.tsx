import React from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guildSelected: GuildProps) => void;
};

export const Guilds: React.FC<Props> = ({ handleGuildSelected }: Props) => {
  const guilds: GuildProps[] = [
    {
      id: "1",
      name: "Lendários",
      icon: "asd.png",
      owner: true,
    },
    {
      id: "2",
      name: "Tchaki Tcha",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        style={styles.guilds}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
      />
    </View>
  );
};
