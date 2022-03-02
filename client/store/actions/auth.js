import { addError, removeError } from "./error";
import { SET_CURRENT_USER } from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import { getSchool, setCurrentUserSchool } from "./school";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

export const setToken = (token) => {
  api.setToken(token);
};

export const logout = () => {
  return (dispatch) => {
    AsyncStorage.clear();
    api.setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

export const authUser = (path, data) => {
  return async (dispatch) => {
    try {
      // const { token, ...user } = await api.call("post", `auth/${path}`, data);
      const { token, ...user } = await api.call("post", `auth/${path}`, data);

      await AsyncStorage.setItem("jwtToken", token);
      api.setToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getUser = (path) => {
  return async (dispatch) => {
    try {
      const { username, _id, xp, polls, school } = await api.call(
        "get",
        `users/${path}`
      );
      const id = _id;
      const user = { username, id, xp, polls, school };
      dispatch(setCurrentUser(user));
      // dispatch(getSchool(school));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const xpIncrease = (path, data) => {
  return async (dispatch) => {
    try {
      const { username, id, xp, polls } = await api.call(
        "post",
        `users/${path}`,
        data
      );
      const user = { username, id, xp, polls };
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const increasePoints = (path, data) => {
  return async (dispatch) => {
    try {
      const { school } = await api.call("get", `users/${path}`);

      const result = await api.call("post", `schools/${school}`, data);

      dispatch(setCurrentUserSchool(result));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
