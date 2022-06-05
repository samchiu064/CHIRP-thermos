<template>
  <div class="table-responsive">
    <table class="table text-nowrap align-middle table-borderless border mb-3">
      <thead class="table-light border-bottom">
        <tr>
          <th class="fw-normal" colspan="2" scope="col">訂單資訊</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Email</th>
          <td>{{ form.user.email }}</td>
        </tr>
        <tr>
          <th>收件人名稱</th>
          <td>{{ form.user.name }}</td>
        </tr>
        <tr>
          <th>收件人聯絡電話</th>
          <td>{{ form.user.tel }}</td>
        </tr>
        <tr>
          <th>收件人地址</th>
          <td>{{ form.user.address }}</td>
        </tr>
        <tr>
          <th>備註</th>
          <td>{{ form.message }}</td>
        </tr>
        <tr>
          <th>付款狀態</th>
          <td>尚未付款</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useOrderStore } from '@/stores/orderStore';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useOrderStore, ['form']),
  },
};
</script>

<style lang="scss" scoped></style>
