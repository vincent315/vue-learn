import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
