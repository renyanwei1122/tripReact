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
   
    
  //console.log(res)
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
                {swipeGroup && Object.keys(swipeGroup).map((item,index) => (
                  
                  <span className={cx('item',{active: HousePice[current]?.enumPictureCategory==item
                  })} key={index} >
                    <span className='text'>{getName(swipeGroup[item][0].title)}</span>
                    { HousePice[current]?.enumPictureCategory==item && <span className='count'>{current+1}/{total}</span>}
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