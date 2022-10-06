import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  email: user.email,
  token: user.accessToken,
  id: user.uid
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
