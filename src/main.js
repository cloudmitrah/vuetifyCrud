import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import home from './components/home.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit,
    props: true
  },
  {
    name: 'home',
    path: '/',
    component: home
  },
];


const router = new VueRouter({ mode: 'history', routes: routes });





new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
