import Vue from 'vue'
import App from './App'
import store from "./store";

Vue.prototype.$store = store;

Vue.config.productionTip = false

import urls from './common/urls.js'
Vue.prototype.$url= urls;

import pub_fun from './common/pub_fun.js'
Vue.prototype.$pub_fun = pub_fun;

import http from '@/common/request';
Vue.prototype.$http = http;
//请求公共部
Vue.prototype.$pub_url ='http://sucai.tcwlchina.com';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
