import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: '广州'
}



export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    changeNowCity(state,{payload}) {
      state.content = payload
    }
  }
})

export const { changeNowCity } = citySlice.actions

export default citySlice.reducer