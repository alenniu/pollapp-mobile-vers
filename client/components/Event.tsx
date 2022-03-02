import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import RNPoll, { IChoice } from "react-native-poll";
import { getSchool, vote, xpIncrease } from "../store/actions";
import { xpToLevel } from "../services/xpToLevel";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
const { width, height } = Dimensions.get("window");

export default function Event() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const currentSchool = useSelector((state) => state.currentSchool);

  const [ownSchool, setOwnSchool] = useState(true);

  useEffect(() => {
    if (ownSchool == false) {
      dispatch(getSchool(currentSchool.opposingSchool[0].opposingSchoolId));
    } else {
      dispatch(getSchool(auth.user.school));
    }
  }, [ownSchool]);

  if (Object.keys(currentSchool).length === 0) {
    console.log("ok");
  } else {
    var students = currentSchool.students.map((student) => {
      return <Text>--{student.username}-</Text>;
    });
  }
  if (Object.keys(currentSchool).length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    if (ownSchool) {
      var rivalName = currentSchool.opposingSchool[0].opposingSchoolName;
    } else {
      var rivalName = currentSchool.name;
    }

    return (
      <View
        style={{
          height: 200,
          width: width,

          justifyContent: "center",
          alignItems: "center",
          paddingTop: 150,
        }}
      >
        <Text>School: {currentSchool.name}</Text>
        <Text>Schools Total Points: {currentSchool.points}</Text>
        <Text>
          Students: <View>{students}</View>
        </Text>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "blue",
            marginRight: 50,
          }}
          onPress={() => setOwnSchool(true)}
          disabled={ownSchool ? true : false}
        >
          <Text>My School</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 50, height: 50, backgroundColor: "green" }}
          onPress={() => setOwnSchool(false)}
        >
          <Text>{rivalName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
