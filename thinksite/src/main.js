
import Vue from 'vue'
// import Index from '@/components/Index.vue'
import router from '@/router/index'
/* eslint-disable */
/* eslint-disable no-new */
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstarp.min.js'
Vue.use(ElementUI)
Vue.use(BootstrapVue);
// Vue.prototype.jquery=require('jquery')


new Vue({
  el: '#app',
  router,
  template: '<div><router-view></router-view></div>'
})