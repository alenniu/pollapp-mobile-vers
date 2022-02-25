import api from "../../services/api";
import { SET_POLLS, SET_CURRENT_POLL } from "../actionTypes";
import { addError, removeError } from "./error";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const setPolls = (polls) => ({
  type: SET_POLLS,
  polls,
});

export const setCurrentPoll = (poll) => ({
  type: SET_CURRENT_POLL,
  poll,
});

export const getPolls = () => {
  return async (dispatch) => {
    try {
      const polls = await api.call("get", "polls");
      shuffle(polls);
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getUserPolls = () => {
  return async (dispatch) => {
    try {
      const polls = await api.call("get", "polls/user");
      console.log(`hi${polls}`);
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const createPoll = (data) => {
  return async (dispatch) => {
    try {
      const poll = await api.call("post", "polls", data);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const getCurrentPoll = (path) => {
  return async (dispatch) => {
    try {
      const poll = await api.call("get", `polls/${path}`);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const vote = (path, data) => {
  return async (dispatch) => {
    try {
      const poll = await api.call("post", `polls/${path}`, data);
      const polls = await api.call("get", "polls");
      // dispatch(setPolls(polls));
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
