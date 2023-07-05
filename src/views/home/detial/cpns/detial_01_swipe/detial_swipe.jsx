import React, { memo } from 'react'
import { DetialSwipeWapper } from '../detial_01_swipe/style.js'
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import cx from "classnames"

const DetialSwipe = memo((props) => {
  const { HousePice } = props
  //console.log(HousePice)

  let res = []
  let swipeGroup = {}
  if(HousePice) {
    for(let item of HousePice) {
      let itemvalue = swipeGroup[item.enumPictureCategory]
      if(!itemvalue) {
        itemvalue = []
        swipeGroup[item.enumPictureCategory] = itemvalue
      }
      swipeGroup[item.enumPictureCategory].push(item)
    }
  }
  for (const key in swipeGroup) {  
     
      const obj = {};  
      obj[key] = swipeGroup[key];  
      res.push(obj);  
    
  }  
    
  console.log(res);
  
  
  console.log(res)
  //console.log(swipeGroup)
  //console.log(swipeGroup)
  
    const getName = (name) => {
    return name.replace("：","").replace("【","").replace("】","")
    }
  

 

  return (
    <DetialSwipeWapper>
      <div className='swipe'>
        <Swiper indicator={(total, current) => (
              <div className='custom-indicator'>
                {res && res.map((item,index) => (
                  
                  <span className={cx('item',{active: true})} key={index} >
                    <span className='text'>{console.log((item['2'])[1]?.title)}</span>
                    <span className='count'></span>
                  </span>
                ))}
                
              </div>
            )}>
          {!HousePice && <Swiper.Item><div></div></Swiper.Item>}
          {HousePice && HousePice.map((items,index) => (
          <Swiper.Item key={index}>
              <img src={items.url} alt="" />
            </Swiper.Item>))}
        </Swiper>  
      </div>
    </DetialSwipeWapper>
  )
})

export default DetialSwipe