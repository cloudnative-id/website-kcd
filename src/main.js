import Vue from 'vue'
import MainApp from './MainApp.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  render: h => h(MainApp),
}).$mount('#app')
