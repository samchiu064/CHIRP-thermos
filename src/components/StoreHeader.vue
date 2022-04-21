<template>
  <header class="position-fixed vw-100 top-0 end-0 left-0">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="navbar__nav--pages">
          <router-link to="/thermos/classic" class="nav-link"
            >經典款</router-link
          >
          <a class="nav-link">關於我們</a>
        </div>
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
          class="
            navbar-brand
            position-absolute
            top-50
            start-50
            translate-middle
          "
          href="#"
          >青朽葉AOKUCHIBA</a
        >
        <div class="navbar__nav--functions">
          <div class="dropdown">
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
          </div>
          <div class="dropdown">
            <a
              class="nav-link"
              href="#"
              id="cart"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="d-none">Shopping Cart</span>
              <i class="bi bi-bag"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="cart">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="bg-dark collapse text-center" id="navbar__mobile-content">
      <div class="navbar-nav">
        <a href="javascript;" class="nav-link">item01</a>
        <a href="javascript;" class="nav-link">item02</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
// Globe
.bi {
  font-size: 24px;
  color: #707070;
}

.dropdown-menu {
  left: auto;
  right: 0;
}

header {
  z-index: 1000;
}

// Custom
.navbar {
  height: 5.25rem;
  @media (max-width: 992px) {
    height: auto;
  }
  .container-fluid {
    margin: 0 30px;
    @media (max-width: 992px) {
      margin: auto;
    }
  }
  &__nav--pages {
    display: flex;
    .nav-link {
      font-size: 14px;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  &__nav--functions {
    display: flex;
  }
}

#navbar {
  &__mobile-icon {
    width: 24px;
    i {
      display: block;
      background-color: #2c3e50;
      height: 3px;
      margin: 5px auto;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
    }
    &.is-active .line:nth-child(2) {
      opacity: 0;
    }
    &.is-active .line:nth-child(1) {
      -webkit-transform: translateY(8px) rotate(45deg);
      -ms-transform: translateY(8px) rotate(45deg);
      -o-transform: translateY(8px) rotate(45deg);
      transform: translateY(8px) rotate(45deg);
    }
    &.is-active .line:nth-child(3) {
      -webkit-transform: translateY(-8px) rotate(-45deg);
      -ms-transform: translateY(-8px) rotate(-45deg);
      -o-transform: translateY(-8px) rotate(-45deg);
      transform: translateY(-8px) rotate(-45deg);
    }
  }
  &__mobile-content {
    div {
      background: #f4f4f6;
      a {
        color: #383838;
      }
    }
  }
}
</style>
