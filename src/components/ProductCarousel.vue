<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
    ref="productCarousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="test Image" />
      </div>
      <div class="carousel-item">
        <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="test Image" />
      </div>
      <div class="carousel-item">
        <img src="http://via.placeholder.com/640x360" class="d-block w-100" alt="test Image" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel';

export default {
  data() {
    return {
      carousel: {},
    };
  },
  mounted() {
    this.carousel = new Carousel(this.$refs.productCarousel);
  },
};
</script>
