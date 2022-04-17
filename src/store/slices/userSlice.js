import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userType } from '../../components/types/userType'

const initialState = {
  userType: null,
  isPopupShown: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action) {
      JSON.stringify(action.payload) === JSON.stringify(userType.admin)
        ? (state.userType = 'admin')
        : (state.userType = 'user')
    },
    logOut(state) {
      state.userType = null
    },
    setIsPopupShown(state, action) {
      state.isPopupShown = action.payload
    },
  },
})

export const { logIn, logOut, setIsPopupShown } = userSlice.actions

export default userSlice.reducer
