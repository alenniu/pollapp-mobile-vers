import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import TopBar from "../components/TopBar";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ErrorMessage />
      <Polls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
