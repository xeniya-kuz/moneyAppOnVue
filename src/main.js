import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import List from '@/components/List.vue'
import myPlugin from './plugins/myplugin'

Vue.component('ListComponent', List)

Vue.use(myPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
