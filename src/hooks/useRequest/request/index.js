import { useState } from "react";
import { BASE_URL,TIMEOUT } from "./config";
import axios from 'axios'


// 重新封装axios
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })

  }

  
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({...config,method: "post"})
  }

}

export default new HYRequest(BASE_URL,TIMEOUT)