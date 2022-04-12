<template>
  <ul
    class="
      nav
      flex-column
      position-fixed
      top-50
      end-0
      translate-middle-y
      text-end
      fs-8
    "
  >
    <li class="nav-item">
      <a
        href="#?"
        @click.prevent
        class="
          nav-link
          color-classic-green
          d-flex
          justify-content-end
          align-items-center
        "
        ><span class="label active">胡克綠</span
        ><span class="bullet bg-color-classic-green"></span
      ></a>
    </li>
    <li class="nav-item">
      <a
        href="#?"
        @click.prevent
        class="
          nav-link
          color-classic-red
          d-flex
          justify-content-end
          align-items-center
        "
        ><span class="label">灰玫紅</span
        ><span class="bullet bg-color-classic-red"></span
      ></a>
    </li>
    <li class="nav-item">
      <a
        href="#?"
        @click.prevent
        class="
          nav-link
          color-classic-blue
          d-flex
          justify-content-end
          align-items-center
        "
        ><span class="label">灰丁寧藍</span
        ><span class="bullet bg-color-classic-blue"></span
      ></a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-link {
  &:hover {
    color: initial;
    transition: 0s;
  }
}
.nav-item {
  &:hover .label {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
}
.bullet {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 50%;
}
.label {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "▸";
    font-size: 15px;
    line-height: 17px;
  }
}
.active {
  // display: inline-block;
}
</style>
