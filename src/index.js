import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import routingComponent from '~/components/routing'

Vue.component(routingComponent.name, routingComponent)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})