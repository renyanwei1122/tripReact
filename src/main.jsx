import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux"
import store from './store'
import { Suspense } from 'react';






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Suspense fallback={<h3>Loading</h3>}>
      <Provider store={store}>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#ff9854',
        },
      }}>
        <App />
      </ConfigProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
 
  ,
)
