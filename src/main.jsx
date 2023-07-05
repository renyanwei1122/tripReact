import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux"
import store from './store'






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#ff9854',
      },
    }}>
      <App />
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
 
  ,
)
