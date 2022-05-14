<template>
  <header class="container-fluid p-0 bg-light" :class="positionType">
    <nav class="navbar navbar-expand-lg navbar-light mx-1 p-3">
      <router-link to="/thermos/classic" class="nav-link d-none d-lg-block"
        >經典款</router-link
      >
      <router-link to="/user/cart" class="nav-link d-none d-lg-block"
        >關於我們</router-link
      >
      <button
        class="navbar-toggler navbar__mobile-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar__mobile-content"
        aria-controls="navbar__mobile-content"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleHamburger"
      >
        <div id="navbar__mobile-icon" :class="{ 'is-active': isActive }">
          <i class="line"></i>
          <i class="line"></i>
          <i class="line"></i>
        </div>
      </button>
      <a
        class="navbar-brand position-absolute top-50 start-50 translate-middle"
        href="#"
        >LOGO</a
      >
      <div class="ms-auto me-0 d-flex">
        <!-- <div class="dropdown">
          <a
            class="nav-link"
            href="#"
            id="member"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="d-none">Sign in</span>
            <i class="bi bi-person-circle"></i>
          </a>
          <ul class="dropdown-menu" aria-labelledby="member">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div> -->
        <StoreHeaderMiniCart :cart="cart" @getCartList="getCartList" />
      </div>
    </nav>
    <nav class="bg-dark collapse text-center" id="navbar__mobile-content">
      <a href="javascript;" class="nav-link text-white">item01</a>
      <a href="javascript;" class="nav-link text-white">item02</a>
    </nav>
    <!-- <div
      class="position-absolute top-0 left-0 w-100 bg-black"
      style="height: 5px"
    ></div> -->
  </header>
</template>

<script>
import StoreHeaderMiniCart from './StoreHeaderMiniCart.vue';

export default {
  components: {
    StoreHeaderMiniCart,
  },
  props: {
    cart: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['getCartList'],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    positionType() {
      if (this.$route.name === 'home') return 'position-fixed';
      if (this.$route.name === 'thermosClassic') return 'position-fixed';
      return 'position-relative';
    },
  },
  methods: {
    toggleHamburger() {
      this.isActive = !this.isActive;
    },
    getCartList() {
      this.$emit('getCartList');
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>
// Globe
.bi {
  font-size: 24px;
  color: #707070;
}

header {
  z-index: 1000;
}

#navbar {
  &__mobile-icon {
    width: 24px;
    i {
      display: block;
      background-color: #2c3e50;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
    }
    &.is-active .line:nth-child(2) {
      opacity: 0;
    }
    &.is-active .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.is-active .line:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}
</style>
