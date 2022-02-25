import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import RNPoll, { IChoice } from "react-native-poll";
import { vote, xpIncrease } from "../store/actions";
import { useEffect } from "react";
import { useState } from "react";
const { width, height } = Dimensions.get("window");
const color = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};

export default function IndividualPoll(props) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);

  const [dontRender, setDontRender] = useState(false);

  useEffect(() => {
    if (props.post.voted.includes(auth.user.id)) {
      console.log("this user is in voted");
      setDontRender(true);
    }
  }, []);

  async function voteFunction(pollId, option) {
    setDontRender(true);
    await dispatch(vote(pollId, { answer: option }));
    if (error.message == "Already voted") {
      return;
    } else {
      let highestOption = "";
      let highestVote = -1;
      await props.post.options.map((option) => {
        if (option.votes > highestVote) {
          highestVote = option.votes;
          highestOption = option.option;
        }
      });

      if (option == highestOption) {
        dispatch(
          xpIncrease(auth.user.id, {
            xpIncrease: parseInt(10, 10),
          })
        );
      }
    }
  }

  const answers =
    props.post.options &&
    props.post.options.map((option) => (
      <View>
        <Button
          title={option.option}
          onPress={() => console.log("hi")}
          // onPress={voteFunction(vote, poll, option, auth)}
          key={option._id}
        />
      </View>
    ));
  var total = 0;
  const amount =
    props.post.options &&
    props.post.options.map((option) => (total += option.votes));
  // console.log(total);

  const data = props.post.options && {
    labels: props.post.options.map((option) => option.option),
    datasets: [
      {
        label: props.post.question,
        backgroundColor: props.post.options.map((option) => color()),
        borderColor: "#323643",
        data: props.post.options.map((option) => option.votes),
      },
    ],
  };
  const choices: Array<IChoice> =
    props.post.options &&
    props.post.options.map((option) => ({
      id: option._id,
      choice: option.option,
      votes: option.votes,
    }));
  // console.log(choices);
  // if (dontRender == true) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>You already voted for this</Text>
  //     </View>
  //   );
  // } else {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>{props.post.question}</Text>
      {/* {props.post.options && <Pie data={data} />} */}
      <View style={{ height: 500 }}>
        {/* <RNPoll
            totalVotes={total}
            choices={choices}
            onChoicePress={(selectedChoice: IChoice) => {
              voteFunction(props.post._id, selectedChoice.choice);
            }}
          /> */}

        <View
          style={{
            flex: 1,
            width: width,
            backgroundColor: "red",
          }}
        >
          {props.post.options &&
            props.post.options.map((option) => {
              if (Math.floor((option.votes / total) * 100) < 20) {
                var safety = 20;
              } else {
                var safety = Math.floor((option.votes / total) * 100);
              }

              if (dontRender == false) {
                return (
                  <View
                    style={{
                      height: "50%",
                      backgroundColor: color(),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{option.option}</Text>
                    <TouchableOpacity
                      style={{
                        height: 50,
                        width: 100,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10",
                      }}
                      onPress={() =>
                        voteFunction(props.post._id, option.option)
                      }
                    >
                      <Text>Vote</Text>
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <View
                    style={{
                      height: "50%",
                      backgroundColor: "white",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: color(),
                        height: "100%",
                        width: `${safety}%`,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>{option.option}</Text>

                      <Text>{Math.floor((option.votes / total) * 100)}%</Text>
                    </View>
                  </View>
                );
              }
            })}
        </View>
      </View>
    </View>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height - 192,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
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
