import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")) || []
  },
  reducers: {
    handleLike: (state, action) => {
      alert("KJLKJL");
      state.data = action.payload;
    },
    removeUser(state) {
      //  dada
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
