import React, { memo } from 'react'
import styled from './styles/navbar.module.css'

const Navbar = memo(() => {
  return (
    <div>
      <div className={styled.navitem}>
        开心旅途
      </div>
    </div>
  )
})

export default Navbar