import React, { memo, useState } from 'react'
import Houseitemv9 from '../../../../components/house-item-v9/house-item-v9'
import HouseItemv3 from '../../../../components/house-item-v3/house-item-v3'
import { useSelector } from 'react-redux'
import { HomeContentWapper } from './style'
import { Component } from 'react'

const HomeConten = memo(() => {
  const { houseList } = useSelector((state) => ({
    houseList: state.home.HouseList
  }))

  //console.log(houseList)
 
  
  

  return (
    <HomeContentWapper>
          <div className='home-content'>
            <h2 className='title'>热门精选</h2>
            <div className='list'>
              {houseList && houseList.map((item,index) => (
                    (item.discoveryContentType===9 ? <Houseitemv9 key={index} houseDate={item.data} houseId={item.data.houseId} />: <HouseItemv3  houseDate={item.data} key={index} houseId={item.data.houseId} />)
              ))}
           </div>
          </div>

    </HomeContentWapper>
    
    
  )
})

export default HomeConten