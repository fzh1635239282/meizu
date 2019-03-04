import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "utils/rem.js"
import "styles/_reset.styl"
import "styles/font-awesome.min.css"
import "mint-ui/lib/style.css"
import router from "router/index.js"
//引入轮播图组件
import {Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
