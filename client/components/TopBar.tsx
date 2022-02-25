import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import RNPoll, { IChoice } from "react-native-poll";
import { vote, xpIncrease } from "../store/actions";
import { xpToLevel } from "../services/xpToLevel";
import { useEffect } from "react";
import { useState } from "react";
const { width, height } = Dimensions.get("window");

export default function TopBar() {
  const auth = useSelector((state) => state.auth);

  return (
    <View
      style={{
        height: 200,
        width: width,

        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 150,
      }}
    >
      <Text>XP: {auth.user.xp}</Text>
      <Text style={{ paddingLeft: 50 }}>LEVEL: {xpToLevel(auth.user.xp)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    width: 1000,
    alignItems: "center",
    backgroundColor: "blue",
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
