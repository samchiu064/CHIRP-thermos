<template>
  <ul class="nav pe-2 flex-column position-fixed top-50 end-0 translate-middle-y text-end fs-8">
    <li
      v-for="(item, index) in products"
      :key="index"
      class="nav-item"
      :class="`text-${item.engColor}`"
    >
      <a
        href="javascript:"
        class="d-flex justify-content-end align-items-center"
        @mousedown.prevent="switchItem(index, item.engColor)"
      >
        <span class="label" :class="{ active: isActive === index }">
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
      activeColor: 'classic-green',
    };
  },
  computed: {
    isActive() {
      if (this.topVisible >= this.innerHeight) return 2;
      if (this.topVisible > 0) return 1;
      return 0;
    },
  },
  methods: {
    switchItem(itemIndex, engColor) {
      const { innerHeight } = window;
      document.documentElement.scrollTop = innerHeight * 0.97 * itemIndex;
      this.activeColor = engColor;
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
  width: 1rem;
  height: 1rem;
  display: inline-block;
  border-radius: 50%;
}
.label {
  opacity: 1;
  transition: all 0.3s ease-in-out;
  &::after {
    opacity: 0;
    content: '▸';
    padding: 0px 2px;
    font-size: 1rem;
    line-height: 1rem;
  }
}
.active.label::after {
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
