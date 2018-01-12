import Vue from 'vue'
import Router from 'vue-router'
import LoginScore from '../components/loginComponent/loginScore.vue'
import MainScore from '../containers/MainScore.vue'
import About from '../components/About.vue'
import Hello from '../components/children/Hello.vue'
import Hi from '../components/children/Hi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:LoginScore,
    },
    {
      path: '/home',
      name: 'home',
      component: MainScore,
      children: [
        {
          path: '/',
          name: 'hello',
          component: Hello,
        },
        {
          path: '/hi',
          name: 'hi',
          component: Hi,
        }
      ]
    },
    {
      path:'/about',
      name:'about',
      component:About
    },

  ],
  data:{
    currentRoute:window.location.pathname
  },
  computed:{
    ViewComponent(){
      console.log(this.currentRoute)
      return routes[this.currentRoute || 'NotFound']
    }
  },
  render(h){
    return h(this.ViewComponent)
  }
})

