// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueScroller from 'vue-scroller'
import { Swipe, SwipeItem ,Navbar, TabItem,TabContainer,TabContainerItem,Cell} from 'mint-ui';
import router from './router'

import '../static/reset.css'
import '../static/style.min.css'

Vue.config.productionTip = false

Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h=>h(App),
  router
})
