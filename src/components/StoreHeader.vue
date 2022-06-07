<template>
  <header class="container-fluid p-0 bg-light" :class="positionType">
    <nav class="navbar navbar-expand-lg navbar-light mx-1 p-3">
      <router-link
        to="/thermos/classic"
        class="nav-link d-none d-lg-block link-dark underline"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassic' }"
        >商品資訊</router-link
      >
      <router-link
        to="/thermos/classic/details"
        class="nav-link d-none d-lg-block link-dark underline"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassicDetails' }"
        >線上訂購</router-link
      >
      <router-link
        to="/order-check"
        class="nav-link d-none d-lg-block link-dark underline"
        :class="{ 'nav-link--selected': this.$route.name === 'checkOrder' }"
        >訂單查詢</router-link
      >
      <router-link
        to="/about-us"
        class="nav-link d-none d-lg-block link-dark underline"
        :class="{ 'nav-link--selected': this.$route.name === 'aboutUs' }"
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
      <a class="navbar-brand position-absolute top-50 start-50 translate-middle" href="#">LOGO</a>
      <div class="ms-auto me-0 d-flex">
        <StoreHeaderMiniCart />
      </div>
    </nav>
    <nav class="bg-dark collapse text-center" id="navbar__mobile-content">
      <a href="javascript;" class="nav-link text-white">item01</a>
      <a href="javascript;" class="nav-link text-white">item02</a>
    </nav>
  </header>
</template>

<script>
import StoreHeaderMiniCart from './StoreHeaderMiniCart.vue';

export default {
  components: {
    StoreHeaderMiniCart,
  },
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
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>
// Globe
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

/* stroke */
.underline {
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '';
    color: transparent;
    background: #212529;
    height: 2px;
    transition: all 0.5s;
  }
  &:hover:after {
    width: 70%;
  }
}

.nav-link--selected {
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 70%;
    content: '';
    color: transparent;
    background: #212529;
    height: 2px;
  }
}
</style>
