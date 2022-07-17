<template>
  <ul
    class="nav flex-column align-items-end position-fixed top-50 end-0 translate-middle-y border border-1 rounded rounded-2 me-2"
    @mouseenter="navIsHovered = true"
    @focus="navIsHovered = true"
    @mouseleave.self="navIsHovered = false"
    @focusout.self="navIsHovered = false"
  >
    <li
      v-for="(item, index) in products"
      :key="index"
      class="nav-item pe-1 py-lg-0"
      :class="`text-${item.engColor}`"
    >
      <button
        type="button"
        class="btn btn-link text-decoration-none text-reset d-flex justify-content-end align-items-center"
        @click.prevent="switchItem(index, item.engColor)"
      >
        <span class="label fs-md-7" :class="{ active: isActive === index }">
          <Transition name="fade">
            <span v-if="navIsHovered">{{ item.chtColor }}</span>
          </Transition>
        </span>

        <span class="bullet" :class="`bg-${item.engColor}`"> </span>
      </button>
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
      navIsHovered: false,
    };
  },
  computed: {
    isActive() {
      if (this.topVisible >= this.innerHeight) return 2;
      if (this.topVisible > 0) return 1;
      return 0;
    },
    itemIndex() {
      if (this.$route.params.color === 'classic-green') return 0;
      if (this.$route.params.color === 'classic-red') return 1;
      if (this.$route.params.color === 'classic-blue') return 2;
      return 0;
    },
  },
  methods: {
    switchItem(itemIndex, engColor) {
      const { innerHeight } = window;
      document.documentElement.scrollTop = innerHeight * 0.97 * itemIndex;
      this.activeColor = engColor;
    },
    toggleNav() {
      this.navIsHover = true;
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.topVisible = document.documentElement.scrollTop;
    });
    setTimeout(() => {
      this.switchItem(this.itemIndex, this.$route.params.color);
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.nav {
  background-color: rgba(255, 255, 255, 0.5);
}
.nav-item {
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
.active.label {
  position: relative;
  animation: float 1s ease-in-out infinite alternate;
  &::after {
    opacity: 1;
  }
}

@keyframes float {
  from {
    right: 0px;
  }
  to {
    right: 6px;
  }
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
