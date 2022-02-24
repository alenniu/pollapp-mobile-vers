import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app-navigator";
import AuthNavigator from "./auth-navigator";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCurrentUser, addError, setToken, getUser } from "../store/actions";
import decode from "jwt-decode";

import { Text } from "react-native";
// import { selectIsAuthenticated } from "../store/reducers/auth";

const AppRoute = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const test = async () => {
      if (await AsyncStorage.getItem("jwtToken")) {
        setToken(await AsyncStorage.getItem("jwtToken"));
        try {
          console.log("hey");
          const initial = await AsyncStorage.getItem("jwtToken");
          const decodedToken = decode(initial);
          dispatch(setCurrentUser(decodedToken));
          dispatch(getUser(decodedToken.id));
        } catch (err) {
          dispatch(setCurrentUser({}));
          dispatch(addError(err));
        }
      }
    };
    test();
  }, []);

  const auth = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}

      {auth.isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
