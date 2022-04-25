<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row">
      <div class="col">
        <div class="position-relative m-4">
          <div class="progress" style="height: 10px">
            <div
              class="progress-bar bg-black"
              role="progressbar"
              style="width: 0%"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="bullet">
            <button
              type="button"
              class="
                position-absolute
                top-50
                start-0
                translate-middle
                btn btn-sm btn-dark
                rounded-pill
              "
              style="width: 2rem; height: 2rem"
            >
              1
            </button>
            <button
              type="button"
              class="
                position-absolute
                top-50
                start-50
                translate-middle
                btn btn-sm btn-light
                bg-color-gray
                rounded-pill
              "
              style="width: 2rem; height: 2rem"
            >
              2
            </button>
            <button
              type="button"
              class="
                position-absolute
                top-50
                start-100
                translate-middle
                btn btn-sm btn-light
                bg-color-gray
                rounded-pill
              "
              style="width: 2rem; height: 2rem"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <table class="table align-middle table-borderless text-center">
          <thead class="table-light">
            <tr>
              <th class="fw-normal" scope="col">商品資訊</th>
              <th class="d-none d-md-table-cell fw-normal" scope="col">
                商品價格
              </th>
              <th
                class="d-none d-md-table-cell fw-normal"
                scope="col"
                width="180"
              >
                數量
              </th>
              <th class="d-none d-md-table-cell fw-normal" scope="col">
                變更明細
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                d-flex d-sm-table-row
                table-row--divider-light
                flex-wrap
                justify-content-center
              "
            >
              <td class="col-12 col-md-auto text-center text-md-start">
                <figure
                  class="
                    figure figure--spacing-mobile
                    d-flex
                    justify-content-start
                    align-items-center
                    flex-column flex-md-row
                    mt-4
                  "
                >
                  <img
                    src="https://fakeimg.pl/89x86/200"
                    alt="img"
                    class="figure-img img-fluid rounded"
                  />
                  <figcaption>
                    <p class="fs-6 fw-light m-0 ps-3">胡克綠</p>
                    <h2 class="fs-6 ps-3">單色不鏽鋼保溫瓶</h2>
                  </figcaption>
                </figure>
              </td>
              <td>NT$ 600</td>
              <td>
                <button class="btn bi bi-dash fs-3 text-black-50"></button>
                <label for="qty" class="w-25 align-middle">
                  <input
                    type="text"
                    class="form-control text-center w-100 text-black-50"
                    id="qty"
                    value="1"
                    min="0"
                  />
                </label>
                <button class="btn bi bi-plus fs-3 text-black-50"></button>
              </td>
              <td>
                <button type="button" class="btn bi bi-trash"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 col-lg-4"></div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.figure {
  &--spacing-mobile {
    @media (max-width: 576px) {
      margin-bottom: 0;
    }
  }
}

.table-row {
  &--divider-light {
    border-bottom: 3px solid #f4f4f6;
  }
}
</style>
