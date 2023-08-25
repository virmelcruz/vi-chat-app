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
    initialLoad: (state, action) => {
      console.log('initial payload', action.payload);
      state.messages = action.payload
    },
    pushMessage: (state, action) => {
      state.messages = [
        action.payload,
        ...state.messages,
      ]
    },
    loadMore: (state, action) => {
      const reversedList = action.payload;
      if (reversedList) {
        state.messages = state.messages.concat(reversedList.slice(state.messages.length, state.messages.length + 25))
      }
    },
  }
});

export const {
  initialLoad,
  pushMessage,
  loadMore,
} = chatSlice.actions;

export default chatSlice.reducer;
