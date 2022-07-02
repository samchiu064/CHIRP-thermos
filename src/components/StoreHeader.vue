<template>
  <header class="container-fluid top-0" :class="[positionType, headerScroll]">
    <nav class="navbar navbar-expand-lg navbar-light mx-1" :class="navScroll">
      <router-link
        to="/thermos/classic-green"
        class="nav-link d-none d-lg-block link-classic-green underline"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassic' }"
        >商品資訊</router-link
      >
      <router-link
        to="/thermos/classic/details/classic-green"
        class="nav-link d-none d-lg-block link-classic-green underline"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassicDetails' }"
        >線上訂購</router-link
      >
      <router-link
        to="/order-check"
        class="nav-link d-none d-lg-block link-classic-green underline"
        :class="{ 'nav-link--selected': this.$route.name === 'OrderCheck' }"
        >訂單查詢</router-link
      >
      <router-link
        to="/about-us"
        class="nav-link d-none d-lg-block link-classic-green underline"
        :class="{ 'nav-link--selected': this.$route.name === 'aboutUs' }"
        >關於我們</router-link
      >
      <button
        class="navbar-toggler border-0"
        type="button"
        :disabled="!isCollapsed"
        @click="toggleHamburger"
      >
        <div id="navbar__mobile-icon" :class="{ isActive: isActive }">
          <i class="line bg-classic-green"></i>
          <i class="line bg-classic-green"></i>
          <i class="line bg-classic-green"></i>
        </div>
      </button>
      <a class="navbar-brand position-absolute top-50 start-50 translate-middle" href="#">
        <img
          src="@/assets/images/logo.svg"
          alt="CHIRP鳥牌Logo圖片"
          style="max-height: 48px"
          class="w-100"
        />
      </a>
      <div class="ms-auto me-0 d-flex">
        <StoreHeaderMiniCart />
      </div>
    </nav>
    <nav
      ref="hamburger"
      class="bg-light collapse text-center position-absolute w-100"
      id="navbar__mobile-content"
    >
      <div class="vh-50">
        <router-link
          to="/thermos/classic"
          class="nav-link link-classic-green fw-medium py-3 fs-5 mt-2"
          :class="{ 'nav-link--selected': this.$route.name === 'thermosClassic' }"
          @click="toggleHamburger"
          >商品資訊</router-link
        >
        <router-link
          to="/thermos/classic/details/classic-green"
          class="nav-link link-classic-green fw-medium py3 fs-5"
          :class="{ 'nav-link--selected': this.$route.name === 'thermosClassicDetails' }"
          @click="toggleHamburger"
          >線上訂購</router-link
        >
        <router-link
          to="/order-check"
          class="nav-link link-classic-green fw-medium py-3 fs-5"
          :class="{ 'nav-link--selected': this.$route.name === 'OrderCheck' }"
          @click="toggleHamburger"
          >訂單查詢</router-link
        >
        <router-link
          to="/about-us"
          class="nav-link link-classic-green fw-medium py3 fs-5 mb-4"
          :class="{ 'nav-link--selected': this.$route.name === 'aboutUs' }"
          @click="toggleHamburger"
          >關於我們</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle';
import StoreHeaderMiniCart from './StoreHeaderMiniCart.vue';

export default {
  components: {
    StoreHeaderMiniCart,
  },
  data() {
    return {
      isActive: false,
      isCollapsed: true,
      collapse: {},
      topVisible: 0,
    };
  },
  computed: {
    positionType() {
      if (this.$route.name === 'home') return 'position-fixed';
      if (this.$route.name === 'thermosClassic') return 'position-fixed';
      return 'position-sticky';
    },
    headerScroll() {
      if (this.topVisible !== 0 && this.$route.name !== 'thermosClassic') {
        return 'header header--scroll';
      }
      return 'header';
    },
    navScroll() {
      if (this.topVisible !== 0 && this.$route.name !== 'thermosClassic') {
        return 'navbar navbar--scroll';
      }
      return 'navbar';
    },
  },
  emits: ['blurPages'],
  methods: {
    toggleHamburger() {
      if (this.isCollapsed) {
        this.isActive = !this.isActive;
        this.collapse.toggle();
      }
      this.$emit('blurPages', this.isActive);
    },
    beCollapsed() {
      this.isCollapsed = true;
    },
    beCollapsing() {
      this.isCollapsed = false;
    },
    calcTopVisible() {
      this.topVisible = document.documentElement.scrollTop;
    },
  },
  mounted() {
    this.collapse = new bootstrapBundle.Collapse(this.$refs.hamburger, {
      toggle: false,
    });
    // To prevent the hamburger list be toggled over and over
    this.$refs.hamburger.addEventListener('show.bs.collapse', this.beCollapsing);
    this.$refs.hamburger.addEventListener('hide.bs.collapse', this.beCollapsing);
    this.$refs.hamburger.addEventListener('shown.bs.collapse', this.beCollapsed);
    this.$refs.hamburger.addEventListener('hidden.bs.collapse', this.beCollapsed);
    document.addEventListener('scroll', this.calcTopVisible);
  },
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 1000;
  padding: 0;
  padding-top: 0.5rem;
  transition: all 0.3s linear;
  &--scroll {
    background-color: rgb(248, 249, 250, 0.85);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
    padding-bottom: 0.25rem;
    transition: all 0.3s linear;
  }
}

.navbar {
  padding: 1rem;
  transition: padding 0.3s linear;
  &--scroll {
    padding: 0.25rem 1rem;
    transition: padding 0.3s linear;
  }
}

#navbar {
  &__mobile-icon {
    width: 24px;
    i {
      display: block;
      background-color: #4d6d58;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
    }
    &.isActive .line:nth-child(2) {
      opacity: 0;
    }
    &.isActive .line:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.isActive .line:nth-child(3) {
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
    background: rgb(77, 109, 88);
    height: 2px;
    transition: all 0.5s;
  }
  &:hover:after {
    width: 70%;
  }
}

.nav-link {
  &--selected {
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
      background: #4d6d58;
      height: 2px;
      @media (max-width: 992px) {
        display: none;
      }
    }
  }
}

.collapsing {
  transition: all 0.5s ease-in-out;
}
</style>
