import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as API from './public/js/api'
import * as AJAX from './public/js/ajax'

Vue.config.productionTip = false

window.API = API;
window.AJAX = AJAX;

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
