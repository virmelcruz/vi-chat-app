import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const chatAdapter = createEntityAdapter();

const chatSlice = createSlice({
  name: "chat",
  initialState: chatAdapter.getInitialState({
    messages: [],
    isLoading: false,
    error: null,
  }),
  reducers: {
    chatStart: (state) => {
      state.isLoading = true;
    },
    chatSuccess: (state, action) => {
      state.messages.push(action.payload);
    },
    chatFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
});

export const {
  chatStart,
  chatSuccess,
  chatFailure,
} = chatSlice.actions;

export default chatSlice.reducer;
