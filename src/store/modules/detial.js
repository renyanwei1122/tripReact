import { getDetailInfos} from '@/hooks/useRequest/module/home.js'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




export const fetchDetialDataAction = createAsyncThunk("fetchdetialdata",(id,{dispatch}) => {

  getDetailInfos(id).then(res => {
    dispatch(changeDetailInfoAction(res))
  })

})


const homeDetialSlice = createSlice({
  name: "detial",
  initialState: {
    DetailInfos: {},
  },
  reducers: {
    changeDetailInfoAction(state, {payload}) {
      state.DetailInfos = payload
    },
  },
 
})

export const {
  changeDetailInfoAction,
} = homeDetialSlice.actions

export default homeDetialSlice.reducer