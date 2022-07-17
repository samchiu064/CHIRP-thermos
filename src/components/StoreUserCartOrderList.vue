<template>
  <div class="table-responsive">
    <table class="table text-nowrap">
      <thead>
        <tr>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col" class="text-end">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td scope="row">{{ item.product.title }}</td>
          <td>{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="text-end">{{ item.product.price?.toLocaleString('en-us') }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">總價</th>
          <td colspan="2" class="text-end">NT$ {{ order.total?.toLocaleString('en-us') }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
