import './assets/css/index.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRouter from '@/router/index.jsx'
import Tabbar from '@/components/tabbar/tabbar.jsx'
import { TabbarWapper } from './components/tabbar/style'
import  Loading from '@/components/loading/index.jsx'
const App = () => {

  
  

  return (
    <BrowserRouter>
      <AppRouter/>
      <TabbarWapper>
        <Tabbar />
        <Loading/>
      </TabbarWapper>
    </BrowserRouter>
  )

}

export default App
