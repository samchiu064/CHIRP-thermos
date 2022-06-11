<template>
  <ul
    class="nav pe-2 flex-column position-fixed top-50 end-0 translate-middle-y text-end fs-8 pb-md-12 pb-xl-0"
  >
    <li
      v-for="(item, index) in products"
      :key="index"
      class="nav-item"
      :class="`text-${item.engColor}`"
    >
      <a
        href="#?"
        class="d-flex justify-content-end align-items-center"
        @click.prevent="switchView(index)"
      >
        <span class="label" :class="{ active: isActive == index }">
          {{ item.chtColor }}
        </span>
        <span class="bullet" :class="`bg-${item.engColor}`"> </span
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
      show: false,
    },
  },
  data() {
    return {
      innerHeight: window.innerHeight,
      topVisible: document.documentElement.scrollTop,
    };
  },
  computed: {
    isActive() {
      if (this.topVisible >= this.innerHeight * 2) return 2;
      if (this.topVisible >= this.innerHeight * 1) return 1;
      if (this.topVisible < this.innerHeight) return 0;
      return false;
    },
  },
  methods: {
    switchView(page) {
      const { innerHeight } = window;
      document.documentElement.scrollTop = innerHeight * page;
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

.nav-item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover .label {
    opacity: 1;
    transition: all 0.3s ease-in-out;
    color: currentColor;
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
    content: '▸';
    font-size: 15px;
    line-height: 17px;
  }
}
.active {
  opacity: 1;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
