import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'a1302268_1586566328857'
  }
  console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
