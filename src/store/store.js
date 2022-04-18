import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './slices/newsSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    news: newsSlice,
  },
})
