import React, { memo, useState, useEffect } from 'react'
import Icon_Location from "@/assets/img/home/icon_location.png"
import { SearchboxWapper } from './style'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import Calender from './cpns/calender/calender'


const Searchbox = memo(() => {
  const {  city, HotInfo } = useSelector((state) => ({
    city: state.city,
    HotInfo: state.home.HotSuggest.data
  }),shallowEqual)

  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"))
  }, [dispatch])

  const navigate = useNavigate()
  

  const cityClick = () => {
    navigate('/city')
  }
  
  const searchClick = () => {
    navigate('/search')
  }

  return (
    <SearchboxWapper>
    <>
      <div className='search-box'>

        <div className="location">
        <div className="city" onClick={cityClick}>{city.content}</div>
        <div className="position">
          <span className="text">我的位置</span>
          <img src={Icon_Location} alt=""/>
        </div>
        </div>

        <Calender />

        <div className='sectionhot'>
              {HotInfo && HotInfo.map((item,index) => <div className="item" key={index}>{ item.tagText.text }</div>)}
        </div>

        <div className="searchbox">
        <div className="item">
          <button className="btn" onClick={searchClick}>开始搜索</button>
        </div>
      </div>
        
      </div>
    </>
    </SearchboxWapper>
   
    
  )
})

export default Searchbox