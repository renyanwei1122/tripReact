import React from "react";
import { useRoutes, Navigate } from 'react-router-dom'

import Home from "@/views/home/home";
import Favor from '@/views/favor/favor.jsx'
import Order from '@/views/order/order.jsx'
import Message from '@/views/message/message.jsx'
import City from '@/views/home/city/city.jsx'
import { element } from "prop-types";
import Search from '@/views/home/search/search.jsx';
import Detial from "../views/home/detial/detial";

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