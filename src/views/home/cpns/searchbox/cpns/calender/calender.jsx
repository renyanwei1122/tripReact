import React, { memo, useState } from 'react'
import {Calendar} from 'antd-mobile'
import moment from 'moment'
import dayjs from 'dayjs'
import { CalenderWapper } from './style'
import { useSelector } from 'react-redux'
import { shallowEqual, useDispatch} from 'react-redux'
import { changeStartDate,changeEndDate } from '../../../../../../store/modules/date'

const Calender = memo(() => {

  // let initiaDate = moment().format('MM月DD日')
  // const [startDate, setStartDate] = useState(initiaDate)
  const dispatch = useDispatch()
  const [chioce, setChioce] = useState(false)
  const {startDate, endDate} = useSelector((state) => ({
    startDate: state.date,
    endDate: state.date
  }))
  //console.log(startDate,endDate)

  const today = dayjs()
  const [val, setVal] = useState(() => [
    today.subtract(0, 'day').toDate(),
    today.add(2, 'day').toDate(),
  ])
  
  

  const dataChioce = (chioce) => {
    setChioce(!chioce)
  }
  
  return (
    <CalenderWapper>
      <div>
        <div className="data-range" onClick={() => dataChioce(chioce)}>
            <div className="start">
              <span>入住</span>
              <span className="data">{moment(val[0]).format('MM月DD日')}</span>
            </div>
              <div className="stay">共{Math.floor((val[1]-val[0])/1000/60/60/24)}晚</div>
            <div className="end">
              <span>离店</span>
              <span className="data">{moment(val[1]).format('MM月DD日')}</span>
            </div>
        
          </div>
    
          <div className="bottom-gray-line">
            <div className="infn">
              <div className="price">价格不限</div>
              <div className="people">人数不限</div>
            </div>
            <div className="keyword">关键字/位置/民宿名</div>
          </div>
          {chioce ? <Calendar
            className='calendar-custom'
            selectionMode='range'
            value={val}
            onChange={(val) => {
              setVal(val)
              dispatch(changeStartDate(val))
              dispatch(changeEndDate(val))
              //console.log(val)
            }}
          /> : null}
      </div>
      
    </CalenderWapper>
  )
})

export default Calender