import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { CategoriesWapper } from './style'

const Categories = memo(() => {
const { categories } = useSelector((state) => ({
  categories: state.home.CategoriesInfo.data
}))


  return (
    <CategoriesWapper>
          <div className='home-categories'>
            {categories && categories.map((item,index) => (
            <div className="item" key={index}>
              <img src={item.pictureUrl} alt=""/>
              <div className="text">{ item.title }</div>
            </div>
            ))}
        </div>

    </CategoriesWapper>
    
  )
})

export default Categories