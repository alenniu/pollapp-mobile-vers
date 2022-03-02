import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import TopBar from "../components/TopBar";
import XpBar from "../components/XpBar";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
      <XpBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFCFF",
    // justifyContent: "center",
  },
});
