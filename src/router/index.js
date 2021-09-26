import VueRouter from 'vue-router';
import Vue from 'vue'

Vue.use(VueRouter)

const Home = ()=> import ('../views/home/Home.vue' )

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home,
  }
]
const router =new VueRouter({
  routes
})

export default router
