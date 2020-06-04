// import Vue from "vue";
import axios from "axios";
// import store from "@/store";
// import notification from "ant-design-vue/es/notification";

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 6000, // 请求超时时间
});

const err = () => {};

// 请求拦截
service.interceptors.request.use((config) => {
  // 从localstorage中取token
  const token = "";
  if (token) {
    config.headers["Access-Token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, err);

// 响应拦截
service.interceptors.response.use((response) => {
  return response.data;
}, err);

export default service;
