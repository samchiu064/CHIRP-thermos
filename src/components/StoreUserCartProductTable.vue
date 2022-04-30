<template>
  <table class="table align-middle table-borderless text-center border mb-3">
    <thead class="table-light border-bottom">
      <tr>
        <th class="fw-normal" scope="col">商品資訊</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col">商品價格</th>
        <th class="d-none d-md-table-cell fw-normal" scope="col" width="180">
          數量
        </th>
        <th
          v-if="!readonly"
          class="d-none d-md-table-cell fw-normal"
          scope="col"
        >
          變更明細
        </th>
        <th
          v-if="readonly"
          class="d-none d-md-table-cell fw-normal"
          scope="col"
        >
          小計
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
        <td class="col-12 col-md-auto">NT$ 600</td>
        <td>
          <button
            v-if="!readonly"
            class="btn bi bi-dash fs-3 text-black-50"
          ></button>
          <label for="qty" class="w-25 align-middle">
            <input
              type="text"
              class="form-control text-center w-100 text-black-50"
              id="qty"
              value="1"
              min="0"
            />
          </label>
          <button
            v-if="!readonly"
            class="btn bi bi-plus fs-3 text-black-50"
          ></button>
        </td>
        <td v-if="!readonly">
          <button type="button" class="btn bi bi-trash"></button>
        </td>
        <td v-if="readonly" class="col-12 col-md-auto">NT$ 600</td>
      </tr>
    </tbody>
    <tfoot v-if="readonly" class="border-top">
      <tr>
        <td colspan="4" class="text-end fw-medium">
          折扣<span class="fw-medium ps-3">- NT$ 240元</span>
        </td>
      </tr>
      <tr>
        <td colspan="4" class="text-end fw-bold">
          本訂單須支付金額<span class="fw-bold ps-3"> NT$ 1,200元</span>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
