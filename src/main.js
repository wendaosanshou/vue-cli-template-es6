import Vue from 'vue';
import App from './App.vue';
import initGlobal from './plugins/global';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 初始化全局变量
initGlobal();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
