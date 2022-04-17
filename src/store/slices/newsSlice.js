import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const initialState = {
  news: [
    {
      name: 'name1',
      body: 'loremipsum1',
      created: '01.04.2009',
      id: '1',
      accepted: true,
    },
    {
      name: 'name2',
      body: 'loremipsum2',
      created: '01.44.2019',
      id: '2',
      accepted: true,
    },
    {
      name: 'name3',
      body: 'loremipsum3',
      created: '01.24.2109',
      id: '3',
      accepted: true,
    },
    {
      name: 'name4',
      body: 'loremipsum4',
      created: '03.04.3009',
      id: '4',
      accepted: true,
    },
  ],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    filterNews(state, action) {},
    searchNews(state, action) {
      const searchedNews = state.news.filter(
        (oneNews) => oneNews.name === action.payload
      )
      state.news = searchedNews
    },
    addNews(state, action) {
      state.news.push(action.payload)
    },
    acceptNews(state, action) {
      state.news.find(
        (oneNews) => oneNews.id === action.payload
      ).accepted = true
    },
    deleteNews(state, action) {
      const newNewsArray = state.news.filter(
        (oneNews) => oneNews.id !== action.payload
      )
      state.news = newNewsArray
    },
  },
})

export const { searchNews, addNews, acceptNews, deleteNews } = newsSlice.actions

export default newsSlice.reducer
