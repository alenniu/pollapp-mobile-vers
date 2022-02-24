import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const DEFAULT_STATE = {
  error: { message: null },
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  composeEnhancers(
    applyMiddleware(thunk)

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
