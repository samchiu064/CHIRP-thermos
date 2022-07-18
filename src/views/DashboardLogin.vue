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
          <button type="submit" class="btn btn-lg btn-primary btn-block">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { postUserLogin } from '@/api/adminLogon';

export default {
  inject: ['pushMessageState'],
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async signin() {
      try {
        const result = await postUserLogin(this.user);

        if (result.data.success) {
          this.$router.push('/dashboard/');
        }

        this.pushMessageState(result, '登入');
      } catch (err) {
        this.pushMessageState(err, '登入');
      }
    },
  },
};
</script>
