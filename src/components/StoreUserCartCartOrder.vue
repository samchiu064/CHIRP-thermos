<template>
  <div class="col-12 col-lg-4">
    <div class="card">
      <h4 class="card-header fs-6 py-2 text-center">您的訂單</h4>
      <ul class="list-group list-group-flush">
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            py-3
            px-0
            mx-3
          "
        >
          <h5 class="fs-6 m-0 fw-normal">小計</h5>
          <p class="fs-6 m-0 fw-medium">NT $1,200</p>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            py-3
            px-0
            mx-3
          "
        >
          <h5 class="fs-6 m-0 fw-normal">運費</h5>
          <p class="fs-6 m-0 fw-medium">免運費</p>
        </li>
        <li class="list-group-item accordion accordion-flush py-3 px-0 mx-3">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                套用折扣碼
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul class="list-group-flush ps-0">
                  <li class="d-flex justify-content-between ps-2">
                    <p>#FREESHIPPING2022</p>
                    <p>已套用折扣碼</p>
                  </li>
                  <li class="d-flex justify-content-between ps-2">
                    <input
                      class="form-control form-control-sm w-70"
                      type="text"
                      placeholder="請輸入折扣碼"
                      aria-label="折扣碼輸入處"
                    />
                    <button type="button" class="btn btn-outline-secondary">
                      套用
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            pt-3
            px-0
            mx-3
            border-bottom-0
          "
        >
          <h5 class="fs-6 m-0 fw-normal">折扣</h5>
          <p class="fs-6 m-0 fw-medium">- NT$240</p>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            pb-3
            px-0
            mx-3
            border-bottom-0
          "
        >
          <h5 class="fs-5 m-0 fw-bold">總計</h5>
          <p class="fs-5 m-0 fw-bold">NT $960</p>
        </li>
        <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
            py-3
            px-0
            mx-3
          "
        >
          <button type="button" class="btn btn-dark w-100 rounded-pill">
            結帳
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
