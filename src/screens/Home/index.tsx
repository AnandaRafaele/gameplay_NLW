import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const appointments = [
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
  ];

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(): void {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate(): void {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
