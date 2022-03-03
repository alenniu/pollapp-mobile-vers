import { StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Polls from "../components/Polls";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ErrorMessage from "../components/ErrorMessage";

import TopBar from "../components/TopBar";
import XpBar from "../components/XpBar";
import Redbadge from "../assets/svgs/badges/redbadge";
const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const [playMode, setPlayMode] = useState(true);

  let playColor = {
    color: "#92A0BC",
  };

  if (playMode) {
    playColor = {
      color: "#4B6EF6",
    };
  }

  let rankColor = {
    color: "#92A0BC",
  };

  if (playMode == false) {
    rankColor = {
      color: "#4B6EF6",
    };
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <XpBar />

      {/* Rest of Homepage */}

      <View
        style={{
          width: width,
          height: 250,
          backgroundColor: "#FAFCFF",
          marginTop: 20,
          flexDirection: "row",
          // justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 200,
            backgroundColor: "#FAFCFF",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Rubik-Bold",
              fontSize: 28,
              color: "#4B6EF6",
            }}
          >
            Caitlyn
          </Text>
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 20,
              color: "#85ACD6",
              marginTop: 3,
            }}
          >
            23 Friends
          </Text>

          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 18,
              color: "#4B6EF6",
              marginTop: 25,
            }}
          >
            Badges
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                width: 45,
                height: 70,
                backgroundColor: "#EFF0F2",
                borderRadius: 5,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#141F2A",
                shadowOpacity: 0.34,
                shadowRadius: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Redbadge />
            </View>
            <View
              style={{
                width: 45,
                height: 70,
                backgroundColor: "#EFF0F2",
                marginLeft: 10,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#141F2A",
                shadowOpacity: 0.34,
                shadowRadius: 2,
              }}
            ></View>
            <View
              style={{
                width: 45,
                height: 70,
                backgroundColor: "#EFF0F2",
                marginLeft: 10,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#141F2A",
                shadowOpacity: 0.34,
                shadowRadius: 2,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            width: 200,
            backgroundColor: "#FAFCFF",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <Image
            source={require("../assets/images/dailybox.png")}
            style={{ width: 100, height: 100 }}
          />
          <TouchableOpacity
            style={{
              width: 150,
              height: 35,
              borderRadius: 30,
              backgroundColor: "#4B6EF6",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Rubik-Medium",
                fontSize: 18,
                color: "#FFFFFF",
              }}
            >
              Open Box
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Rubik-Medium",
              fontSize: 13,
              color: "#85ACD6",
              marginTop: 10,
            }}
          >
            Daily free Mystery Box
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: width,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setPlayMode(true)}
        >
          <FontAwesome5 name="play" size={18} color={playColor.color} />
          <Text
            style={[
              {
                fontFamily: "Rubik-Bold",
                fontSize: 21,

                marginLeft: 5,
              },
              playColor,
            ]}
          >
            Play Mode
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => setPlayMode(false)}
        >
          <Entypo name="bar-graph" size={20} color={rankColor.color} />

          <Text
            style={[
              {
                fontFamily: "Rubik-Bold",
                fontSize: 21,
                color: "#92A0BC",
                marginLeft: 5,
              },
              rankColor,
            ]}
          >
            Ranking
          </Text>
        </TouchableOpacity>
      </View>
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
