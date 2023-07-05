import {getCityAll,  getFavorData, getHotSuggests, getHouseList} from '@/hooks/useRequest/module/home.js'
import { getCategories } from '../../hooks/useRequest/module/categories'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




export const fetchHomeDataAction = createAsyncThunk("fetchdata",(currentPage,{dispatch}) => {
  
  
  getCityAll().then(res => {
    dispatch(changeCityAllAction(res))
  }).then(dispatch(changeisLoadingAction(false)))

  getFavorData().then(res => {
    dispatch(changeFavorAction(res))
  }).then(dispatch(changeisLoadingAction(false)))

  getHotSuggests().then(res => {
    dispatch(changehotSuggestAction(res))
  }).then(dispatch(changeisLoadingAction(false)))

  getCategories().then(res => {
    dispatch(changeCategoriesAction(res))
  }).then(dispatch(changeisLoadingAction(false)))

  dispatch(changeisLoadingAction(true))
  if(typeof currentPage == 'number') {
    getHouseList(currentPage).then(res => {
      dispatch(changeHouseLisetAction(res))
    }).then(dispatch(changeisLoadingAction(false)))
  }
  
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    CityAll:{},
    FavorData: {},
    HotSuggest: {},
    CategoriesInfo: {},
    HouseList: [],
    isLoading:false
  },
  reducers: {
    changeCityAllAction(state, {payload}) {
      state.CityAll = payload
    },
    changeFavorAction(state, {payload}) {
      state.FavorData = payload
    },
    changehotSuggestAction(state,{payload}) {
      state.HotSuggest = payload
    },
    changeCategoriesAction(state,{payload}) {
      state.CategoriesInfo = payload
    },
    changeHouseLisetAction(state,{payload}) {
      if(payload.data) {state.HouseList.push(...payload.data)}
    },
    changeisLoadingAction(state,{payload}) {
      state.isLoading = payload
    }
  },
 
})

export const {
  changeCityAllAction,
  changeFavorAction,
  changehotSuggestAction,
  changeCategoriesAction,
  changeHouseLisetAction,
  changeisLoadingAction
} = homeSlice.actions

export default homeSlice.reducer