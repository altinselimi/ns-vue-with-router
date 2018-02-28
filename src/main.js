const Vue = require('nativescript-vue');

import router from './router/routes';
import store from './store';
import './styles.scss';

Vue.prototype.$store = store;

router.replace('/home')
  new Vue({
    router,
    store
  }).$start();
