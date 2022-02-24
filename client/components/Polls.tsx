import React, { Component, Fragment, useEffect } from "react";
import { View, Button, Text, FlatList, Dimensions } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getPolls,
  getUserPolls,
  getCurrentPoll,
  vote,
  xpIncrease,
} from "../store/actions";
import auth from "../store/reducers/auth";

import RNPoll, { IChoice } from "react-native-poll";
import IndividualPoll from "./IndividualPoll";

const color = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};

export default function Polls() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const auth = useSelector((state) => state.auth);
  const polls = useSelector((state) => state.polls);
  const pollCurrent = useSelector((state) => state.getCurrentPoll);
  //getPolls, getUserPolls, getCurrentPoll, vote, xpIncrease

  useEffect(() => {
    dispatch(getPolls());
  }, []);

  // handleSelect(id) {
  //   const { history } = this.props;
  //   history.push(`/poll/${id}`);
  // }

  //only if you vote in the major9ity, then ur xp increases

  // async voteFunction(vote, poll, option, auth) {
  //   await vote(poll._id, { answer: option.option });
  //   if (this.props.error.message == "Already voted") {
  //     return;
  //   } else {
  //     let highestOption = "";
  //     let highestVote = -1;
  //     await poll.options.map((option) => {
  //       if (option.votes > highestVote) {
  //         highestVote = option.votes;
  //         highestOption = option.option;
  //       }
  //     });
  //     if (option.option == highestOption) {
  //       this.props.xpIncrease(auth.user.id, {
  //         xpIncrease: parseInt(10, 10),
  //       });
  //     }
  //   }
  // }

  // const { auth, getPolls, getUserPoll, vote, getCurrentPoll }

  const pollsRender = polls.map((poll) => {
    const answers =
      poll.options &&
      poll.options.map((option) => (
        <View>
          <Button
            title={option.option}
            onPress={() => console.log("hi")}
            // onPress={voteFunction(vote, poll, option, auth)}
            key={option._id}
          />
        </View>
      ));

    const data = poll.options && {
      labels: poll.options.map((option) => option.option),
      datasets: [
        {
          label: poll.question,
          backgroundColor: poll.options.map((option) => color()),
          borderColor: "#323643",
          data: poll.options.map((option) => option.votes),
        },
      ],
    };

    return (
      <View></View>
      // <View
      //   // onClick={() => this.handleSelect(poll._id)}
      //   key={poll._id}
      //   style={{
      //     height: 40,
      //     width: 300,
      //     margin: "auto",
      //     // textAlign: "center",
      //     borderColor: "blue",
      //     // border: "solid",
      //   }}
      // >
      //   <Text>{poll.question}</Text>
      //   {/* <br></br> */}
      //   <View
      //     style={{
      //       display: "flex",
      //       flexDirection: "row",
      //       justifyContent: "center",
      //     }}
      //   >
      //     <Text>{answers}</Text>
      //   </View>
      //   <View
      //     style={{
      //       width: "100%",
      //       height: 50,
      //       display: "flex",
      //       flexDirection: "row",
      //       justifyContent: "center",
      //     }}
      //   >
      //     {/* {poll.options && <Pie data={data} />} */}
      //   </View>
      // </View>
    );
  });

  return (
    <View>
      {/* {auth.isAuthenticated && (
        <View>
          <button onClick={getPolls}>All polls</button>
            <button onClick={getUserPolls}>My polls</button>
        </View>
      )} */}
      <FlatList
        data={polls}
        renderItem={({ item }) => <IndividualPoll post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height - 48}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />

      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {pollsRender}
      </View> */}
    </View>
  );
}

// export default connect(
//   (store) => ({
//     auth: store.auth,
//     polls: store.polls,
//     pollCurrent: store.getCurrentPoll,
//     error: store.error,
//   }),
//   { getPolls, getUserPolls, getCurrentPoll, vote, xpIncrease }
// )(Polls);
