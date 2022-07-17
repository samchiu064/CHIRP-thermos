<template>
  <nav class="navbar navbar-expand-lg p-3">
    <div class="container-fluid">
      <router-link to="/dashboard" class="navbar-brand"
        ><img
          src="@/assets/images/logo_backend.svg"
          alt="後臺logo圖片"
          style="max-height: 48px"
          class="navbar-brand position-absolute top-50 start-50 translate-middle"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link link-classic-green fs-5 px-3"
              >產品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link link-classic-green fs-5 px-3"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link link-classic-green fs-5 px-3"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item ms-auto">
            <router-link to="/login" class="nav-link link-classic-green fs-5 px-3 text-right"
              >登入</router-link
            >
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn nav-link link-classic-green fs-5 px-3 border-0"
              @click="logout"
            >
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { apiPostUserLogout } from '@/api/admin';
import { mapWritableState } from 'pinia';
import statusStore from '@/stores/statusStore';

export default {
  computed: {
    ...mapWritableState(statusStore, ['apiRequestIsFailed', 'apiErrorMessage']),
  },
  methods: {
    async logout() {
      try {
        await apiPostUserLogout();
        document.cookie = `hexToken=;expires= ${new Date(0).toGMTString()}`;

        this.$router.push('/login');
      } catch (err) {
        this.apiRequestIsFailed = true;
        this.apiErrorMessage = err;
      }
    },
  },
};
</script>
