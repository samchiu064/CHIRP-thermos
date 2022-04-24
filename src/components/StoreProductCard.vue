<template>
  <section class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3">
    <span class="col-12 col-md-12 col-lg-12">猜您喜歡</span>
    <div class="col" v-for="(item, index) in 4" :key="index">
      <div class="card">
        <img src="empty" class="card-img-top" alt="empty" />
        <div class="card-body">
          <h5 class="card-sub-title text-center fs-7 fw-normal">灰玫紅</h5>
          <h4 class="card-title text-center fs-6">單色不鏽鋼保溫瓶</h4>
          <hr />
          <p class="card-text text-center fs-6">NT$ 600</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
