import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 108,
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginBottom: 31,
    marginTop: 2,
    alignSelf: "flex-end",
  },
});
