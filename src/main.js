import Vue from 'vue'
import MainApp from './MainApp.vue'
import Buefy from 'buefy'
import { firestorePlugin } from 'vuefire'

import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(firestorePlugin)

new Vue({
  render: h => h(MainApp),
}).$mount('#app')
