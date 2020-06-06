import Vue from "vue";

import AntdVue from "./antdVue";
Vue.use(AntdVue);

import ls from "./localStorage/index";
Vue.use(ls, { name: "ls" });

import axios from "./axios/index";
Vue.use(axios, { name: "http" });

import log from "./log/index";
Vue.use(log, { name: "log" });
