import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import modules from '@/views/modules/index.vue'
import map from '@/views/components/map/map.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: index
  },
  {
    path: '/modules',
    component: modules
  },
  {
    path: '/map',
    component: map
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router