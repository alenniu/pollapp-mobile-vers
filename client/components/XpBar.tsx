import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import RNPoll, { IChoice } from "react-native-poll";
import { vote, xpIncrease } from "../store/actions";
import { xpToLevel } from "../services/xpToLevel";
import { useEffect } from "react";
import { useState } from "react";
import Greengemicon from "../assets/svgs/topbar/greengemicon";
import Usericon from "../assets/svgs/topbar/usericon";
import Notificationicon from "../assets/svgs/topbar/notificationicon";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("window");

export default function XpBar() {
  const auth = useSelector((state) => state.auth);

  return (
    <View
      style={{
        height: 50,
        width: width,
        // backgroundColor: "blue",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            // marginRight: 5,
            fontSize: 15,
            color: "#4B6EF6",
          }}
        >
          XP
        </Text>
      </View>

      <Progress.Bar
        progress={0.5}
        width={280}
        height={13}
        color="#4EBFFF"
        unfilledColor="#B2E3FF"
        borderRadius={15}
        borderWidth={0}
      />

      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: "#FAFCFF",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          shadowOffset: { width: 0, height: 1 },
          shadowColor: "#000000",
          shadowOpacity: 0.2,
          shadowRadius: 10,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            // marginRight: 5,
            fontSize: 15,
            color: "#4B6EF6",
          }}
        >
          {xpToLevel(auth.user.xp)}
        </Text>
      </View>

      {/* <Text>XP: {auth.user.xp}</Text>
      <Text style={{ paddingLeft: 50 }}>LEVEL: {xpToLevel(auth.user.xp)}</Text> */}
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
