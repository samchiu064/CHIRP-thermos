<template>
  <!-- <div>Dashboard</div> -->
  <MainNavbar></MainNavbar>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';

export default {
  components: {
    MainNavbar,
  },
  created() {
    // console.log(document.cookie);
    // 取得 Token
    if (document.cookie) {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('hexToken='))
        .split('=')[1];
      // Add token to Header
      this.$http.defaults.headers.common.Authorization = token;
    }

    // Send request to api/user/check for verifying login status
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
