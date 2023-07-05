import React, { memo, useEffect } from 'react'
import {SearchBarWapper} from './style.js'
import { useSelector } from 'react-redux'



const SearchBar = memo(() => {

  const {startDate, endDate} = useSelector((state) => ({
    startDate: state.date.startDate,
    endDate: state.date.endDate
  }))

  
  return (
    <SearchBarWapper>
    <div className="search">
    <div className="select-time">
      <div className="item start">
        <span className="name">住</span>
        <span className="date">{startDate}</span>
      </div>
      <div className="item end">
        <span className="name">离</span>
        <span className="date">{endDate}</span>
      </div>
    </div>
    <div className="content ellipsis-text-1">
        <input className="key-word" placeholder="关键字/位置/民宿"/>
    </div>
    <div className="right">
        <i className="icon-search"></i>
    </div>
  </div>
  </SearchBarWapper>
  )
})

export default SearchBar