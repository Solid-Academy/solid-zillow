import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: []
  },
  reducers: {
    handleLike: (state, action) => {
      alert("KJLKJL");
      state.data.push(action.payload);
    },
    removeUser(state) {
      //  dada
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
