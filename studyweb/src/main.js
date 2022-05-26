//引入Vue
import Vue from 'vue'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入APP
import App from './App.vue';
//引入VueRouter
import VueRouter from 'vue-router'
import router from './router'
import store from './store';

//应用插件
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router:router,
  
}).$mount('#app')
