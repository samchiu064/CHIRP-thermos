1. Navbar 要怎麼調整成 左 LOGO 右 的結構

- 外層 div 設定 justify-contnet-between

  <nav class="navbar navbar-expand-lg bg-light navbar__base align-content-center" role="navigation">
    <a class="navbar-brand position-absolute top-50 start-50 translate-middle" href="#"
      >Logo Here</a
    >
    <div class="d-flex">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <i class="bi bi-list"></i> -->
        <div id="navbar__hamburger">
          <i class="line"></i>
          <i class="line"></i>
          <i class="line"></i>
        </div>
      </button>
    </div>
    <div class="container-fluid navbar__mobile">
      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <div class="navbar-nav">
          <div class="d-lg-flex">
            <a href="javascript;" class="nav-link">item01</a>
            <a href="javascript;" class="nav-link">item02</a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex position-absolute top-50 end-0 translate-middle-y">
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
          <i class="bi bi-person"></i>
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
          <i class="bi bi-cart2"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="cart">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
        </ul>
      </div>
    </div>
  </nav>
