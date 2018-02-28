const Vue = require('nativescript-vue');
import router from './router/routes';
import store from './store';
import './styles.scss';

router.replace('/home')
new Vue({
  router,
  store
}).$start();
