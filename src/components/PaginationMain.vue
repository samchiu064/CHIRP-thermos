<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: pages.current_page === 1 }">
        <a
          class="page-link disabled"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage('prev')"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(page, key) in pages['total_pages']"
        :key="key"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: pages.current_page === pages.total_pages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage('next')">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  emit: ['emit-page'],
  methods: {
    updatePage(page) {
      if (page === 'prev') {
        this.$emit('emit-page', this.pages.current_page - 1);
      } else if (page === 'next') {
        this.$emit('emit-page', this.pages.current_page + 1);
      } else this.$emit('emit-page', page);
    },
  },
};
</script>
