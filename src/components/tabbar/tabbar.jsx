import React, { memo } from 'react'
import tabbarData from '../../assets/data/tabdata.js'
import { useNavigate,useLocation } from 'react-router-dom'
import cx from 'classnames'
import { useEffect } from 'react';  






const Tabbar = memo(() => {

  const navigate = useNavigate()
  const location = useLocation()
 
  const [currentIndex,setcurrentIndex] = React.useState(0)
  const { pathname, search, hash } = location
  const history = location.history

  useEffect(() => {
    switch(pathname) {
      case '/home':
        setcurrentIndex(0)
        break
      case '/favor':
        setcurrentIndex(1)
        break
      case '/order':
        setcurrentIndex(2)
        break
      case '/message':
        setcurrentIndex(3)
        break
    }
  },[pathname])
  
  

  const itemClick = (index,item) => {
    setcurrentIndex(index)
    navigate(`${item?.path}`)
  }
  
 

  const getAssetURL = (image) => {
    return new URL(`../../assets/img/${image}`, import.meta.url).href
  }

  return (
    <>
    <div className='tabbar' >
      {
        tabbarData?.map((item,index) => (
          <div className='tab-bar-item'
          key={item.id}
          >
            <div 
            className={cx('tab-bar-item',{active: currentIndex==index})}
            onClick={() => itemClick(index,item)}
            > 
              {currentIndex == index ? <img src={getAssetURL(item.imageActive)} alt="" /> : <img src={getAssetURL(item.image)} alt="" />}
              <span className='text'>{item.text}</span>
            </div>
            
          </div>
        )) 
      }
    </div>
    
    </>
    
    
  )
})

export default Tabbar