import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [],
  filteredNews: [],
  loading: 'idle',
  error: null,
}

//Имитация работы с сервером
export const fetchNews = createAsyncThunk('product/fetchNews', async (data) => {
  return data
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    searchNews(state, action) {
      state.filteredNews = state.news.filter((oneNews) => {
        if (
          oneNews.name
            .toLowerCase()
            .includes(action.payload.search.toLowerCase())
        ) {
          return oneNews
        }
      })
    },

    addNews(state, action) {
      state.news.push(action.payload)
      state.filteredNews.push(action.payload)
    },
    acceptNews(state, action) {
      state.news.find(
        (oneNews) => oneNews.id === action.payload
      ).accepted = true
      state.filteredNews.find(
        (oneNews) => oneNews.id === action.payload
      ).accepted = true
    },
    deleteNews(state, action) {
      state.news = state.news.filter((oneNews) => oneNews.id !== action.payload)
      state.filteredNews = state.news.filter(
        (oneNews) => oneNews.id !== action.payload
      )
    },
  },

  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.loading = 'pending'
      state.error = null
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.news = action.payload
      state.filteredNews = action.payload
    },
    [fetchNews.rejected]: (state, action) => {
      state.loading = 'reject'
      state.error = action.payload
    },
  },
})

export const { searchNews, addNews, acceptNews, deleteNews } = newsSlice.actions

export default newsSlice.reducer
