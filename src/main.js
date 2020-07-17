import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

import {setCookie,getCookie,delCookie} from '@/utils/cookie.js'
Vue.prototype.$cookieStore = {setCookie,getCookie,delCookie}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
