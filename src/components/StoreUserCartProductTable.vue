<template>
  <table class="table align-middle table-borderless text-center border mb-3">
    <thead class="table-light border-bottom">
      <tr>
        <th class="fw-normal" scope="col">商品資訊</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col">商品價格</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col" width="180">
          數量
        </th>
        <th class="d-none d-md-table-cell fw-normal" scope="col">變更明細</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col">折扣後價格</th>
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
        <td>NT$ 600</td>
      </tr>
    </tbody>
    <tfoot class="border-top">
      <tr>
        <td colspan="4" class="text-end fw-bold">本訂單須付款金額</td>
        <td class="fw-bold">NT$ 1,200元</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
