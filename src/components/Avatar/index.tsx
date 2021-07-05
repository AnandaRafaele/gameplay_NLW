import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Image } from "react-native";

import { styles } from "./styles";

type Props = {
  urlImage: string;
};

export const Avatar: React.FC<Props> = ({ urlImage }: Props) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.container}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
};
