import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/index.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
