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
        path: '',
        name: 'thermos',
        redirect: () => '/thermos/classic',
      },
      {
        path: 'classic',
        name: 'thermosClassic',
        component: () => import('../views/StoreThermosClassic.vue'),
      },
      {
        path: 'classic/details',
        name: 'thermosClassicDetails',
        component: () => import('../views/StoreThermosClassicDetails.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/StoreUser.vue'),
    children: [
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/StoreUserCart.vue'),
      },
      {
        path: 'cart/checkout',
        name: 'checkout',
        component: () => import('../views/StoreUserCartCheckout.vue'),
      },
      {
        path: 'cart/summary',
        name: 'summary',
        component: () => import('../views/StoreUserCartSummary.vue'),
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
