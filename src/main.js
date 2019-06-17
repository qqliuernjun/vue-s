import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import lodash from 'lodash'
import router from "./router/index"
import checkReg from "@tydic-group/plugin-regular-check"

window._=Vue.prototype._=lodash;
Vue.config.productionTip = false;
window.checkReg=checkReg;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
