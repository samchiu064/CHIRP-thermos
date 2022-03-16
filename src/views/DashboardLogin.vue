<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signin">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only w-100"
            >Email address
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              v-model="user.username"
            />
          </label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only w-100"
            >Password
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </label>
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          console.log(res);
          const { token, expired } = res.data;
          document.cookie = `hexToken = ${token}; expires = ${new Date(expired)}`; // expires, not expired; 不使用 new Date Expires 時間會變成 When the browsing session ends
          this.$router.push('/dashboard/products');
        }
      });
    },
  },
};
</script>
