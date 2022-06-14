<template>
  <footer class="py-4">
    <nav class="nav justify-content-center border-top py-3 my-0">
      <router-link
        to="/thermos/classic"
        class="nav-link d-block link-secondary underline fs-6 p-2 px-md-3"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassic' }"
        >商品資訊</router-link
      >
      <router-link
        to="/thermos/classic/details/classic-green"
        class="nav-link d-block link-secondary underline fs-6 p-2 px-md-3"
        :class="{ 'nav-link--selected': this.$route.name === 'thermosClassicDetails' }"
        >線上訂購</router-link
      >
      <router-link
        to="/order-check"
        class="nav-link d-block link-secondary underline fs-6 p-2 px-md-3"
        :class="{ 'nav-link--selected': this.$route.name === 'orderCheck' }"
        >訂單查詢</router-link
      >
      <router-link
        to="/about-us"
        class="nav-link d-block link-secondary underline fs-6 p-2 px-md-3"
        :class="{ 'nav-link--selected': this.$route.name === 'aboutUs' }"
        >關於我們</router-link
      >
    </nav>
    <p class="text-muted text-center fs-7">Copyright © 2022 CHIRP鳥牌. All rights reserved</p>
    <p class="text-muted text-center fs-7">
      Designed/Developed by: Sam Chiu | Admin portal:
      <router-link to="/dashboard" class="link-secondary">Dashboard</router-link>
    </p>
    <ul class="list-group flex-row justify-content-center align-items-center">
      <li class="list-group-item bg-transparent border-0">
        <a
          href="https://www.linkedin.com/in/sam-chiu-4b7557137/"
          class="link-secondary"
          target="_blank"
          ><span class="visually-hidden">Link of Sam Chiu's LinkedIn page</span
          ><i class="bi bi-linkedin fs-3"></i
        ></a>
      </li>
      <li class="list-group-item bg-transparent border-0">
        <a href="https://github.com/samchiu064" class="link-secondary" target="_blank"
          ><span class="visually-hidden">Link of Sam Chiu's GitHub page</span>
          <i class="bi bi-github fs-3"></i
        ></a>
      </li>
      <li class="list-group-item bg-transparent border-0">
        <a href="mailto: samchiu064@gmail.com" class="link-secondary"
          ><span class="visually-hidden">Send an email to samchiu064@gmail.com</span
          ><i class="bi bi-envelope-fill fs-3"></i
        ></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>
