import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user.redux'
import chatReducer from './reducers/chat.redux'

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
})

export default store