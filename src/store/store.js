import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import newsSlice from './slices/newsSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    news: newsSlice,
  },
})
