// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import '../static/css/public.css';
import '../static/css/reset.css';
import store from '@/vuex/store';
import VueCookies from 'vue-cookies';	
import axios from 'axios';
Vue.prototype.$http = axios;
Vue.use(axios)
Vue.use(VueCookies)
Vue.use(YDUI);
Vue.use(router);
Vue.config.productionTip = false
    
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

