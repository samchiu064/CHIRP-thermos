<template>
  <section class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
    <span class="col-12 col-md-12 col-lg-12">
      <slot name="title">推薦商品</slot>
    </span>
    <div class="col" v-for="(item, index) in products" :key="item + index">
      <div class="card pe-auto">
        <img :src="item.imageUrl" class="img-box rounded w-100" alt="商品圖片" />
        <div class="card-body">
          <h5 class="card-sub-title text-center fs-7 fw-normal">
            {{ item.chtColor }}
          </h5>
          <h4 class="card-title text-center fs-6">{{ item.title }}</h4>
          <hr />
          <p class="card-text text-center fs-6">NT$ {{ item.price.toLocaleString('en-us') }}</p>
        </div>
        <!-- <router-link :to="`/thermos/classic/details/${item.engColor}`"></router-link> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
// .img-box {
//   &:hover {
//     filter: blur(5px);
//   }
// }
</style>
