<template>
  <ul
    class="
      nav nav--spacing
      flex-column
      position-fixed
      top-50
      end-0
      translate-middle-y
      text-end
      fs-8
    "
  >
    <li
      v-for="(item, index) in products"
      :key="index"
      class="nav-item"
      :class="`color-${item.engColor}`"
    >
      <a
        href="#?"
        @click.prevent="switchView(index)"
        class="d-flex justify-content-end align-items-center"
        ><span class="label" :class="{ active: isActive == index }">{{
          item.chtColor
        }}</span
        ><span class="bullet" :class="`bg-color-${item.engColor}`"></span
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      vh: window.innerHeight,
      topVisible: document.documentElement.scrollTop,
    };
  },
  computed: {
    isActive() {
      if (this.topVisible >= this.vh * 2) return 2;
      if (this.topVisible >= this.vh * 1) return 1;
      if (this.topVisible < this.vh) return 0;
      return false;
    },
  },
  methods: {
    switchView(page) {
      const vh = window.innerHeight;
      document.documentElement.scrollTop = vh * page;
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.topVisible = document.documentElement.scrollTop;
    });
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.nav {
  &--spacing {
    margin-right: 1rem;
    @media (max-width: 576px) {
      margin-right: 0.5rem;
    }
  }
}

.nav-item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover .label {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    // color: currentColor;
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
  opacity: 1;
}
</style>
