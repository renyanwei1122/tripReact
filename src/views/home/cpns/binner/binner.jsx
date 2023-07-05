import React, { memo } from 'react'
import { BinnerWapper } from './style'
import binnerImg from "@/assets/img/home/banner.webp"


const Binner = memo(() => {
  return (
    <BinnerWapper>
        <div className='binner'>
          <img src={binnerImg} alt="" />
        </div>
    </BinnerWapper>

  )
})

export default Binner