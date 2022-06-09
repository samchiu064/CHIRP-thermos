<template>
  <div class="container-fluid mt-3 position-relative"></div>
</template>

<script>
import { apiPostUserCheck } from '@/api/admin';

export default {
  components: {},
  created() {
    apiPostUserCheck()
      .then((res) => {
        if (!res.data.success) this.$router.push('/login');
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};
</script>
