<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-nav order-1 d-block d-lg-none">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleHamburger"
        >
          <!-- <i class="bi bi-list"></i> -->
          <div id="navbar__hamburger" :class="{ 'is-active': isActive }">
            <i class="line"></i>
            <i class="line"></i>
            <i class="line"></i>
          </div>
        </button>
      </div>
      <div class="col-12 col-lg-auto d-flex order-4 order-lg-first">
        <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <div class="navbar-nav">
            <a href="javascript;" class="nav-link">item01</a>
            <a href="javascript;" class="nav-link">item02</a>
          </div>
        </div>
      </div>
      <div class="navbar-nav order-2"><a class="navbar-brand" href="#">Akatsuki 青朽葉</a></div>
      <div class="d-flex flex-row justify-content-end order-3">
        <div class="nav-item dropdown">
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
        <div class="nav-item dropdown">
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
.navbar__mobile {
  background-color: white;
  color: #383838;
  @media (max-width: 992px) {
    background: #f4f4f6;
    // transform: translateY(7px);
  }
}

.dropdown-menu {
  left: auto;
  right: 0;
}

.navbar-toggler {
  #navbar__hamburger {
    width: 24px;
    i {
      height: 3px;
      background-color: #2c3e50;
      display: block;
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
}
.bi {
  font-size: 24px;
  color: #707070;
}
</style>
