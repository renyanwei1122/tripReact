import React, { memo } from 'react'
import pic from '@/assets/img/home/location.png'
import classes from './style.module.css'
import { useNavigate } from 'react-router'

const HouseItemv3 = memo((props) => {
  const { houseDate,houseId } = props
  const navigate = useNavigate()
  const itemClick = (houseId) => {
    navigate("/detial/" + houseId)
  }
  return (
   
         <div className={classes.houseitemv3} onClick={() => itemClick(houseId)}>
          <div className={classes.houseitem}>
          <div className={classes.iteminner}>
            <div className={classes.cover}>
              <img src={houseDate.image.url} alt=""/>
            </div>
            <div className={classes.info}>
              <div className={classes.location}>
                <img src={pic} alt=""/>
                <span className={classes.text}>{houseDate.location}</span>
              </div>
              <div className={classes.name}>{houseDate.houseName}</div>
              <div className={classes.summary}>{houseDate.summaryText}</div>
              <div className={classes.price}>
                <span className={classes.new}>{'￥' + houseDate.finalPrice}</span>
                <span className={classes.old}>{'￥' + houseDate.productPrice}</span>
                (<span className={classes.tip} >{houseDate?.priceTipBadge?.text}</span>)
              </div>
            </div>
          </div>
        </div>
  </div>
   
    
  )
})

export default HouseItemv3