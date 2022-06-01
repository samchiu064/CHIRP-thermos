<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <StoreUserCartProgressBar
        :percentage="progressPercent"
        :enableStepsArray="enableStepsArray"
      />
    </div>
    <div class="row">
      <router-view
        :emailValue="form.user.email"
        :nameValue="form.user.name"
        :telValue="form.user.tel"
        :addressValue="form.user.address"
        :messageValue="form.message"
        @update:emailValue="(newValue) => (form.user.email = newValue)"
        @update:nameValue="(newValue) => (form.user.name = newValue)"
        @update:telValue="(newValue) => (form.user.tel = newValue)"
        @update:addressValue="(newValue) => (form.user.address = newValue)"
        @update:messageValue="(newValue) => (form.user.message = newValue)"
        @validateForm="validateForm"
      ></router-view>
      <StoreUserCartSpreadsheet
        v-if="this.$route.name !== 'checkout'"
        :nextPage="nextPage"
        :formIsValid="formIsValid"
      />
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import StoreUserCartProgressBar from '../components/StoreUserCartProgressBar.vue';
import StoreUserCartSpreadsheet from '../components/StoreUserCartSpreadsheet.vue';

export default {
  components: {
    StoreUserCartProgressBar,
    StoreUserCartSpreadsheet,
  },
  data() {
    return {
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      formIsValid: false,
    };
  },
  computed: {
    nextPage() {
      if (this.$route.name === 'cart') return 'order';
      if (this.$route.name === 'order') return 'checkout';
      return 'cart';
    },
    progressPercent() {
      if (this.$route.name === 'cart') return 50;
      if (this.$route.name === 'order') return 100;
      if (this.$route.name === 'checkout') return 100;
      return 50;
    },
    enableStepsArray() {
      if (this.$route.name === 'cart') return [1];
      if (this.$route.name === 'order') return [1, 2];
      if (this.$route.name === 'checkout') return [1, 2, 3];
      return [1];
    },
    ...mapState(useCartStore, ['cart']),
  },
  methods: {
    ...mapActions(useCartStore, ['getCartList']),
    validateForm(result) {
      this.formIsValid = result;
    },
  },
  created() {
    console.log(this.$route);
    this.getCartList();
  },
};
</script>

<style lang="scss" scoped></style>
