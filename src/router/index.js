import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/StoreHome.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/DashboardLogin.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardHome.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashboardProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashboardOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashboardCoupons.vue'),
      },
    ],
  },
  {
    path: '/thermos',
    component: () => import('../views/StoreThermos.vue'),
    children: [
      {
        path: 'classic',
        component: () => import('../views/StoreThermosClassic.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/StoreHome.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/StoreCart.vue'),
      },
      {
        path: 'product/:productId',
        component: () => import('../views/StoreProduct.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
