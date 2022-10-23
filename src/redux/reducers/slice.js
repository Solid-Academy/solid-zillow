import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")) || []
  },
  reducers: {
    handleLike: (state, action) => {
      alert("added");
      state.data.push(action.payload);
    },
    removeLike: (state, action) => {
      alert("deleted");
      state.data = state.data.filter((item) => item.id !== action.payload);
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
