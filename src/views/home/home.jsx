import  { memo,useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Navbar from '@/views/home/cpns/navbar/navbar.jsx'
import Binner from './cpns/binner/binner'
import Searchbox from './cpns/searchbox/searchbox'
import Categories from './cpns/categories/categories'
import HomeConten from './cpns/home-content/homeConten'
import { changeHouseLisetAction, fetchHomeDataAction } from '../../store/modules/home'
import useScroll from '../../hooks/useScroll'
import SearchBar from '@/components/search-bar/search-bar.jsx'
import { HomeWapper } from './style'



const Home = memo(() => {

  const { houseList } = useSelector((state) => ({
    houseList: state.home.HouseList
  }),shallowEqual)


  let [currentPage,setCurrentPage] = useState(1)
  const [isShow,setisShow] = useState(false)
 
  const dispatch = useDispatch()
  const moreBtnClick = () => {
    dispatch(fetchHomeDataAction(currentPage))
    currentPage++
    setCurrentPage(currentPage)
  }

  const {scrollHeight, scrollTop, clientHeight} = useScroll()
  useScroll(moreBtnClick)

  const clickCheck = () => {
    moreBtnClick()
  }


  
  useEffect(() => {
    if(scrollTop > 350) {
      setisShow(true)
    } else {
      setisShow(false)
    }
  },[scrollTop])
  

  return (
    <>
      <HomeWapper>
      <Navbar/>
      <Binner/>
      <Searchbox/>
      <Categories/>
      {isShow && <div className="search-bar"><SearchBar /></div>}
      <HomeConten/>
      <button onClick={clickCheck}>点击加载</button>
      <div style={{height: '60px'}} ></div>
      </HomeWapper>
    </>
    
  )
})

Home.displayName = 'Home'
export default Home