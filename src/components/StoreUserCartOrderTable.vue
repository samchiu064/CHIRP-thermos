<template>
  <div class="table-responsive">
    <table class="table text-nowrap align-middle table-borderless border mb-3">
      <thead class="table-light border-bottom">
        <tr>
          <th colspan="2" scope="col" class="fw-normal">訂單資訊</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="fw-medium">Email</th>
          <td>{{ form.user.email }}</td>
        </tr>
        <tr>
          <th class="fw-medium">收件人名稱</th>
          <td>{{ form.user.name }}</td>
        </tr>
        <tr>
          <th class="fw-medium">收件人聯絡電話</th>
          <td>{{ form.user.tel }}</td>
        </tr>
        <tr>
          <th class="fw-medium">收件人地址</th>
          <td>{{ form.user.address }}</td>
        </tr>
        <tr>
          <th class="fw-medium">備註</th>
          <td>{{ form.message }}</td>
        </tr>
        <tr>
          <th class="fw-medium">付款狀態</th>
          <td>尚未付款</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
