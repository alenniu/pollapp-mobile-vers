import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";

const ErrorMessage = () => {
  const error = useSelector((state) => state.error);
  console.log(error.message);

  return <View>{error && <Text>{error.message} </Text>}</View>;
  //checking if error exists, if yes, then show error message
};

export default ErrorMessage;
