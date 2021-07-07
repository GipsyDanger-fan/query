import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfonts/iconfont.css'
import moment from 'moment'
import { echarts } from 'echarts'
import 'echarts-gl'
import VCharts from 'v-charts'
import VueParticles from 'vue-particles'
import 'v-charts/lib/style.css'
// import {
//   decoration4
// } from '@jiaminghi/data-view'
import App from './App.vue'
import request from './utils/request'
import router from './router'
import store from './store'
import './assets/ttf/font.css'
// import JSEncrypt from 'jsencrypt';//引入模块

// Vue.prototype.$jsEncrypt = JSEncrypt;//配置全局变量
import JsEncrypt from 'jsencrypt'
import { KEY } from '@/datas/CONSTANTS'
Vue.use(VueParticles)

// 密码加密 RSA加密
Vue.prototype.$jsEncrypt = function (psd) {
  const encry = new JsEncrypt(KEY)
  encry.setPublicKey()
  const data = encry.encrypt(psd)
  return data
}

// 转换时间格式，年月日时分秒
// Date.prototype.Format = function (fmt) { // author: meizz
//   var o = {
//     'M+': this.getMonth() + 1, // 月份
//     'd+': this.getDate(), // 日
//     'h+': this.getHours(), // 小时
//     'm+': this.getMinutes(), // 分
//     's+': this.getSeconds(), // 秒
//     'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
//     S: this.getMilliseconds() // 毫秒
//   }
//   if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)) }
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
//     }
//   }
//   return fmt
// }

Vue.config.productionTip = false
Vue.use(ElementUI)
// vue.use(pipe)
Vue.use(VCharts)
Vue.prototype.$axios = request
// Vue.use(decoration4)
const fn = Vue.prototype
fn.$moment = moment
fn.$echarts = echarts
fn.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
