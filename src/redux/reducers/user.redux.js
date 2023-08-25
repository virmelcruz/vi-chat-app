import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({
    user: {
      name: '',
      avatar: '',
    },
    isLoading: false,
  }),
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    logOut: (state) => {
      state.user = {
        name: '',
        avatar: '',
      }
    },
  }
});

export const {
  loginStart,
  loginSuccess,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
