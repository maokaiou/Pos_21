import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './button/index'
import './mock/mock'
Vue.config.productionTip = false

Vue.prototype.$http = axios

axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.code == 200){
    return res.data
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
