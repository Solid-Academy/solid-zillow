import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/slice";
// import { testReducer } from "./reducers/test";

export const basketActions = userReducer.actions;

export const reducers = combineReducers({
  user: userReducer
  // test: testReducer
});

export const store = configureStore({
  reducer: {
    user: reducers
    // test: reducers
  }
});

store.subscribe(() => {
  const redux = store.getState();
  localStorage.setItem("user", JSON.stringify(redux.user.data));
});
