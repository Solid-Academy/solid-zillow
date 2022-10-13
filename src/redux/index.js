import userReducer from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  localStorage.setItem("user", JSON.stringify(state.getState()));
});
