// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// 1.在引入vue之后导入vue-router的包
import Vuerouter from 'vue-router'
// 2.手动安装vue-router
Vue.use(Vuerouter)

import Container from "./components/container"
import Selfinfo from "./components/selfinfo"

Vue.config.productionTip = false

// 3.创建路由对象
var router=new Vuerouter({
	routes:[
	{path:'/container',component:Container},
	{path:"/selfinfo/:id",name:"another",component:Selfinfo},
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
  //挂载
})
