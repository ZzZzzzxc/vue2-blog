import Vue from "vue";

import "./antdVue";

import ls from "./localStorage/index";
Vue.use(ls, { name: "ls" });
