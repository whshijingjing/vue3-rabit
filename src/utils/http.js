import axios from "axios";
const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net";
const instance = axios.create({
  baseURL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // 1. 添加全局的loading...
    // console.log(config);
    return config;
  },(err) => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (res) => {
    // 1. 获取正确的数据
    // console.log(res);
    return res.data;
  },
  (err) => {
    // 2. 获取错误的信息
    return Promise.reject(err);
  }
);
export default instance;