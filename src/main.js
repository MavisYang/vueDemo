// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import {DatePicker,Radio,Table,RadioGroup,RadioButton,Row,Col,TableColumn} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'  //获取文件夹下面的
import VueRouter from 'vue-router'
import store from './store'

// Vue.use(ElementUI,{size:'small'})
Vue.config.silent = false;
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Table)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: {App}
})



