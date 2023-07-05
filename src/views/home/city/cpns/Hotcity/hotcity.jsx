import React, { memo } from 'react'
import { HotCityWapper } from './style'

const Hotcity = memo((props) => {
  const {dataInfo} = props
  console.log(dataInfo)
  return (
    <HotCityWapper>
      <div className='list'>
        <div className='list-item'>{dataInfo?.cityName}</div>
      </div>
    </HotCityWapper>
    
  )
})

export default Hotcity