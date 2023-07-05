import React, { memo, useEffect, useState } from 'react'
import { LoadingWapper } from './styles'
import img from "@/assets/img/home/full-screen-loading.gif"
import { useDispatch, useSelector } from 'react-redux'
import { changeisLoadingAction } from '../../store/modules/home'



const Loading = memo(() => {
  const {isLoading} = useSelector((state) => ({
    isLoading: state.home.isLoading
  }))
  const dispatch = useDispatch()

  
  const isLoadingClick = () => {
    dispatch(changeisLoadingAction(false))
  }
  
  
  return (
    <LoadingWapper>
    {isLoading && <div className='loading' onClick={isLoadingClick}>
    <div className="bg">
      <img src={img} alt=""/>
    </div>
    </div>}
    </LoadingWapper>
  )
})

export default Loading
