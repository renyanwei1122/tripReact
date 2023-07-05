import React, { memo, useEffect } from 'react'
import { CityWipper } from './style'
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { Tabs } from 'antd-mobile'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { IndexBar, List } from 'antd-mobile'
import { changeNowCity } from '@/store/modules/city'




const City = memo(() => {
  const navigate = useNavigate()
  
  const { cityInfo } = useSelector((state) => ({
    cityInfo: state.home.CityAll.data,
    
  }),shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("fetchdata"))
  }, [dispatch])

  // let title = cityInfo.cityGroup
  // console.log(title)
  //console.log(cityInfo)

  const onCancle = () => {
    navigate(-1)
  }

  
  
    
  const charCodeOfA = 'A'.charCodeAt(0)
  const groups = Array(26).fill('').map((_, i) => ({title: String.fromCharCode(charCodeOfA + i),
    items: cityInfo?.cityGroup?.cities?.map((item,index) => item)
  })) 


  groups.splice(0,0,{"title": '#'})


  const groupsOversea = Array(26).fill('').map((_, i) => ({title: String.fromCharCode(charCodeOfA + i),
    items: cityInfo?.cityGroupOverSea?.cities?.map((item,index) => item)
  })) 


  groupsOversea.splice(0,0,{"title": '#'})


  const cityClick = (city) => {
    dispatch(changeNowCity(city.cityName))
    navigate(-1)
  }

  useEffect(() => {
    groups
    
  },[groups])
  
  
 

  return (
    <>
    <div className='top_page'>
    <CityWipper>
          <Input 
          placeholder='城市/区域/位置'
          style={{width: '80%',margin: '10px',color: '#ff9854',borderRadius:'20px'}} 
          prefix={<SearchOutlined />} 
          allowClear
          />
          <a onClick={onCancle} style={{color:'black'}}>取消</a>
          <Tabs>
          <Tabs.Tab title={cityInfo?.cityGroup?.title} key='cityGroup'>
          <div style={{ height: window.innerHeight }}>
          <IndexBar>
           {groups.map(group => {
              const { title,items } = group
              return (
                <IndexBar.Panel
                  index={title}
                  title={`${title=='#' ? '热门' : title}`}
                  key={`标题${title}`}
                >
              <List>
              {items && items.map((item, index) => (
                      item.cities.map((content,index) => (item.group==title && <List.Item onClick={() => {cityClick(content)}} key={index}>{content.cityName}</List.Item>))
                ))}
              
              {cityInfo?.cityGroup?.hotCities && cityInfo.cityGroup.hotCities.map((item, index) => (
                      title=='#' && <List.Item onClick={() => {cityClick(item)}} key={index}>{item.cityName}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
          </div>
          
          </Tabs.Tab>
          <Tabs.Tab title={cityInfo?.cityGroupOverSea?.title} key='cityGroupOverSea'>
          <div style={{ height: window.innerHeight }}>
          <IndexBar>
           {groupsOversea.map(group => {
              const { title,items } = group
              return (
                <IndexBar.Panel
                  index={title}
                  title={`${title=='#' ? '热门' : title}`}
                  key={`标题${title}`}
                >
              <List >
              {items && items.map((item, index) => (
                      item.cities.map((content,index) => (item.group==title && <List.Item onClick={() => {cityClick(content)}} key={index}>{content.cityName}</List.Item>))
                ))}
              
              {cityInfo?.cityGroupOverSea?.hotCities && cityInfo.cityGroupOverSea.hotCities.map((item, index) => (
                      title=='#' && <List.Item  onClick={() => {cityClick(item)}} key={index}>{item.cityName}</List.Item>
                      
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
          </div>
          </Tabs.Tab>
        </Tabs>
    </CityWipper>
    </div>
       
    </>
   
    
  )
})

export default City