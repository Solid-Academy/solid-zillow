import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../redux/reducers/slice";
import { userActions } from "../redux/reducers/slice";

export const basketActions = userActions.actions;

export const reducers = combineReducers({
  user: userSlice
});

export const store = configureStore({
  reducer: {
    user: reducers
  }
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("user", JSON.stringify(state.user.data));
});
