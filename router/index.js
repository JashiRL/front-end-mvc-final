import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/index.vue';
import ProductDetails from '../pages/product/_productId.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:productId',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
