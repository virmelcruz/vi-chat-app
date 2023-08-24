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
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
} = userSlice.actions;

export default userSlice.reducer;
