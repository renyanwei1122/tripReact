import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'
import moment from 'moment'
import dayjs from 'dayjs'



const today = dayjs()
const initialState = {
  startDate: moment(today.subtract(0, 'day').toDate()).format('MM月DD日'),
  endDate: moment(today.add(2, 'day').toDate()).format('MM月DD日'),
}


  


export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeStartDate(state,{payload}) {
      state.startDate = moment(payload[0]).format('MM月DD日')
    },
    changeEndDate(state,{payload}) {
      state.endDate = moment(payload[1]).format('MM月DD日')
    },
    
  }
})

export const { changeStartDate,changeEndDate} = dateSlice.actions

export default dateSlice.reducer