import { Component, useState } from "react";
import { View } from "./Themed";
import { TextInput, Button } from "react-native";
import { connect, useDispatch } from "react-redux";
import { authUser, logout } from "../store/actions";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  //   //using bracket notation in setState, it allows you to use a variable name
  //   //this selects the name="username" in the input and set that as the target which is what you typed
  // }

  function handleSubmit() {
    // const { authType } = this.props;
    // e.preventDefault();
    //prevents the default action of html to refresh to page after submit
    // this.props.authUser(authType || "login", { username, password });
    console.log(username, password);
    dispatch(authUser("login", { username, password }));
  }

  return (
    <View>
      <TextInput
        keyboardType="default"
        // value={username}
        placeholder="username"
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        secureTextEntry={true}
        accessibilityElementsHidden={true}
        // value={password}
        placeholder="password"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}

//connect allows you to connect to store } first param is passing into the store, second is functions that we are getting out of the store (actions)
// export default connect(() => ({}), { authUser, logout })(Auth);
export default Auth;
