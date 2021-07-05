import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";

import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const [category, setCategory] = useState("");

  const appointments: AppointmentProps[] = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "2",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  /**
   * ScrollView é indicado para quando você tem poucos elementos a serem renderizados, pois ele coloca todos os elementos em tela de uma vez.
   * Flatlist é mais performatica e é indicada para quando você tem muitos elementos em uma lista, pois ela rendezira aos poucos e da prioridade aos elementos que estão visiveis em tela (no foco da scroll)
   */

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          keyExtractor={(item) => item.id}
          data={appointments}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </View>
    </View>
  );
};
