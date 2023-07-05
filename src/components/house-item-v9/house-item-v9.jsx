import React, { memo } from 'react'
import classes from './style.module.css'
import { Rate } from 'antd-mobile'
import { useNavigate } from 'react-router'

const Houseitemv9 = memo((props) => {
  const { houseDate,houseId } = props
  const navigate = useNavigate()
  
  const itemClick = (houseId) => {
    console.log(houseId)
    navigate("/detial/" + houseId)
    
  }
  return (
        <div className={classes.houseitemv9} onClick={() => itemClick(houseId)}>
        <div className={classes.item}>
        <div className={classes.cover}>
         <img src={houseDate.image.url} alt=""/>
        </div>
        <div className={classes.con}>
          <div className={classes.summary}>{houseDate.summaryText}</div>
          <div className={classes.houseName}>{houseDate.houseName}</div>
          <div className={classes.bottom}>
            <Rate className={classes.rate} allowHalf defaultValue={Number(houseDate.commentScore)}  />
            <span className={classes.price}>￥{houseDate.finalPrice}</span>
          </div>
      </div>
    </div>
  </div>
      
    
  )
})

export default Houseitemv9 