import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/slice";

export const basketActions = userReducer.actions;

export const reducers = combineReducers({
  user: userReducer
});

export const store = configureStore({
  reducer: reducers
});

store.subscribe(() => {
  const redux = store.getState();
  localStorage.setItem("user", JSON.stringify(redux.user.data));
});
