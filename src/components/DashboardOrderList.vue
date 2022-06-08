<template>
  <table class="table table-striped table-hover">
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
  </table>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">Email</th>
        <th scope="col">收件人名稱</th>
        <th scope="col">收件人連絡電話</th>
        <th scope="col">收件人地址</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">{{ form.email }}</td>
        <td scope="row">{{ form.name }}</td>
        <td scope="row">{{ form.tel }}</td>
        <td scope="row">{{ form.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
    form: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
