<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/dashboard" class="navbar-brand">後台管理</router-link>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link">產品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" @click="logout">登出</router-link>
          </li>
        </ul>
        <span class="navbar-text"> Navbar text with an inline element </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          console.log(res);
          document.cookie = `hexToken=;expires= ${new Date(0).toGMTString()}`;
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
