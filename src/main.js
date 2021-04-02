import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store';

import "@/assets/css/tailwind.css"

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
