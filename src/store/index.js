import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import cityReducer from "./modules/city"
import dateReducer from "./modules/date"
import detialReducer from "./modules/detial"



const store = configureStore({
  reducer: {
    home: homeReducer,
    city: cityReducer,
    date: dateReducer,
    detial: detialReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭序列化状态检测中间件
      serializableCheck: false
    })
})

export default store