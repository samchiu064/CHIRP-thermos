import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'StoreView',
    component: () => import('../views/StoreView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/StoreHome.vue'),
      },
      {
        path: 'thermos/classic',
        name: 'thermosClassic',
        component: () => import('../views/StoreThermosClassic.vue'),
      },
      {
        path: 'thermos/classic/details',
        name: 'thermosClassicDetails',
        component: () => import('../views/StoreThermosClassicDetails.vue'),
      },
      {
        path: 'user/cart',
        name: 'usercart',
        component: () => import('../views/StoreUserCartView.vue'),
        children: [
          {
            path: '',
            name: 'cart',
            components: {
              progressBar: () => import('@/components/StoreUserCartProgressBar.vue'),
              productTable: () => import('@/components/StoreUserCartProductTable.vue'),
              spreadSheet: () => import('@/components/StoreUserCartSpreadsheet.vue'),
            },
          },
          {
            path: 'order',
            name: 'order',
            components: {
              progressBar: () => import('@/components/StoreUserCartProgressBar.vue'),
              orderForm: () => import('@/components/StoreUserCartOrderForm.vue'),
              // default: () => import('../views/StoreUserCartOrder.vue'),
              spreadSheet: () => import('@/components/StoreUserCartSpreadsheet.vue'),
            },
          },
          {
            path: 'checkout',
            name: 'checkout',
            components: {
              default: () => import('../views/StoreUserCartCheckout.vue'),
              progressBar: () => import('@/components/StoreUserCartProgressBar.vue'),
            },
          },
          {
            path: 'checkout/:orderId',
            name: 'checkoutOrder',
            component: () => import('../views/StoreUserCartCheckoutOrder.vue'),
          },
        ],
      },
      {
        path: 'order-check',
        name: 'checkOrder',
        component: () => import('../views/StoreCheckOrder.vue'),
      },
      {
        path: 'about-us',
        name: 'aboutUs',
        component: () => import('../views/StoreAboutUs.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/DashboardHome.vue'),
      },
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
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/DashboardLogin.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
