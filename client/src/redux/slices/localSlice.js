import { createSlice } from "@reduxjs/toolkit";

const userData = window.localStorage.getItem("user");
const initialState = {
  user: userData && userData !== "undefined" ? JSON.parse(userData) : null,
};

const localSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // You can also update localStorage here if needed
    },
    clearUser: (state) => {
      state.user = null;
      // You can also update localStorage here if needed
    },
  },
});

export const { setUser, clearUser } = localSlice.actions;

export default localSlice.reducer;
