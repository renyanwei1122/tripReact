import {useEffect, useState} from 'react'
import throttle from '@/utils/throttle.js'

export default function useScroll(reachBottomCB,elRef) {
    let el = window
    const [scrollHeight,setScrollHeight] = useState(0)
    const [scrollTop, setScrollTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    if(elRef) {
      el = elRef
    }
    const scrollListenHandler = throttle(() => {
      if(el === window) {
        const newclientHeight = document.documentElement.clientHeight
        const newscrollTop = document.documentElement.scrollTop
        const newscrollHeight = document.documentElement.scrollHeight
        setClientHeight(newclientHeight)
        setScrollTop(newscrollTop)
        setScrollHeight(newscrollHeight)
      } else {
        const newclientHeight = el.clientHeight
        const newscrollTop = el.scrollTop
        const newscrollHeight = el.scrollHeight
        setClientHeight(newclientHeight)
        setScrollTop(newscrollTop)
        setScrollHeight(newscrollHeight)
      }
      if(clientHeight + scrollTop == scrollHeight) {
        if(reachBottomCB) {reachBottomCB()}
      }
    },500)
    window.addEventListener("scroll", scrollListenHandler)
    return () => {
      window.removeEventListener("scroll",scrollListenHandler)
    }
  
  })
  return {scrollHeight, scrollTop, clientHeight}
  
  
}


