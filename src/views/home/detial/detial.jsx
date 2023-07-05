import React, { memo, useEffect } from 'react'
import { DetialWapper } from './style'
import { useNavigate, useParams } from 'react-router'
import { NavBar, Toast } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetialDataAction } from '../../../store/modules/detial'
import DetialSwipe from './cpns/detial_01_swipe/detial_swipe'


const Detial = memo(() => {
  const {id} = useParams("detial/:id")
  let Id = id
  const dispatch = useDispatch()
  const {DetailInfos} = useSelector((state) => ({
    DetailInfos: state.detial.DetailInfos.data
  }))

  //console.log(DetailInfos)
 useEffect(() => {
  dispatch(fetchDetialDataAction(Id))
 },[Id,dispatch])
    
  
  //console.log(DetailInfos)
  const navigate = useNavigate()
  const back = () => {
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
      
    })
    navigate(-1)
  }
   

  return (
    
    <DetialWapper>
        <div className='top_page'>
        <NavBar back='旅途' onBack={back}>
          房屋详情
        </NavBar>
        <DetialSwipe HousePice={DetailInfos?.mainPart.topModule.housePicture.housePics}/>
        </div>
    </DetialWapper>
  )
})

export default Detial