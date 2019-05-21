import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import lodash from 'lodash'
import validator from "test-validator"
import router from "./router/index"
// const vali=require("test-validator").default;

window._=Vue.prototype._=lodash;
Vue.config.productionTip = false
window.test_validator=validator;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
