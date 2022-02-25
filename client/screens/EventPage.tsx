import { StyleSheet } from "react-native";

import ErrorMessage from "../components/ErrorMessage";
import Event from "../components/Event";
import { Text, View } from "../components/Themed";
import TopBar from "../components/TopBar";

export default function EventPage() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ErrorMessage />
      <Event />
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
