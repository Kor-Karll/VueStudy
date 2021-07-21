import Vue from "vue"
import VueRouter from "vue-router"

import Home from '~/components/Home.vue'
import Axios from '~/components/Axios.vue'
import Emit from '~/components/Emit.vue'
import Event from '~/components/Event.vue'
import Mixin from '~/components/Mixin.vue'
import Ref from '~/components/Ref.vue'
import Vuex from '~/components/Vuex.vue'
import Watch from '~/components/Watch.vue'
import Computed from '~/components/Computed.vue'
import End from '~/components/End.vue'
Vue.use(VueRouter)

const NotFound = { template: "<div>Not Found</div>" }

const router = new VueRouter({
    mode: "history",
    routes: [
      { path: "/", component: Home },
      { path: "*", component: NotFound },
      { path: "/axios", component: Axios },
      { path: "/emit", component: Emit },
      { path: "/event", component: Event },
      { path: "/mixin", component: Mixin },
      { path: "/ref", component: Ref },
      { path: "/vuex", component: Vuex },
      { path: "/watch", component: Watch },
      { path: "/computed", component: Computed },
      { path: "/end", component: End },
    ],
  })
  
  export default router