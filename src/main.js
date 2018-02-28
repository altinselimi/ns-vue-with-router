const Vue = require('nativescript-vue');
import router from './router/routes';
import './styles.scss';
router.replace('/home')
new Vue({
  router
}).$start();
