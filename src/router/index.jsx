import React from "react";
import { useRoutes, Navigate } from 'react-router-dom'

// import Home from "@/views/home/home";
// import Favor from '@/views/favor/favor.jsx'
// import Order from '@/views/order/order.jsx'
// import Message from '@/views/message/message.jsx'
// import City from '@/views/home/city/city.jsx'
// import Search from '@/views/home/search/search.jsx';
// import Detial from "../views/home/detial/detial";

const Home = React.lazy(() => import("@/views/home/home"))
const Favor = React.lazy(() => import('@/views/favor/favor.jsx'))
const Order = React.lazy(() => import('@/views/order/order.jsx'))
const Message = React.lazy(() => import('@/views/message/message.jsx'))
const City = React.lazy(() => import('@/views/home/city/city.jsx'))
const Search  = React.lazy(() => import('@/views/home/search/search.jsx'))
const Detial = React.lazy(() => import("../views/home/detial/detial"))

const Router = React.memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/favor',
      element: <Favor/>
    },
    {
      path: '/order',
      element: <Order/>
    },
    {
      path: '/message',
      element: <Message/>
    },
    {
      path: '/city',
      element: <City/>,
    },
    {
      path: '/search',
      element: <Search/>
    },
    {
      path: '/detial/:id',
      element: <Detial/>
    },
    {
      path: '*',
      element: <Navigate to="/"/>
    }
  ])
  return element
})

export default Router