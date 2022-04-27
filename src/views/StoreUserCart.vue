<template>
  <main class="container p-3 p-md-5 bg-white">
    <div class="row mb-6 justify-content-center">
      <div class="col-10 position-relative m-4">
        <div class="progress" style="height: 6px">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
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
              btn btn-sm btn-secondary
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
              rounded-pill
            "
            style="width: 2rem; height: 2rem"
          >
            3
          </button>
        </div>
        <div class="word">
          <p class="position-absolute top-100 start-0 translate-middle-x mt-4">
            購物車
          </p>
          <p class="position-absolute top-100 start-50 translate-middle-x mt-4">
            填寫訂單明細
          </p>
          <p
            class="position-absolute top-100 start-100 translate-middle-x mt-4"
            style="width: 4rem"
          >
            確認訂單
          </p>
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
                    mt-3
                  "
                >
                  <img
                    src="https://fakeimg.pl/89x86/200"
                    alt="img"
                    class="figure-img img-fluid rounded mx-3"
                  />
                  <figcaption>
                    <p class="fs-6 fw-light m-0">胡克綠</p>
                    <h2 class="fs-6">單色不鏽鋼保溫瓶</h2>
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
            <li
              class="list-group-item accordion accordion-flush py-3 px-0 mx-3"
            >
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
                py-3
                px-0
                mx-3
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
                py-3
                px-0
                mx-3
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

.accordion-button {
  &:not(.collapsed) {
    color: #212529;
    background-color: white;
  }
}
</style>
