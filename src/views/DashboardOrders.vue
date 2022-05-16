<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button">建立新的優惠券</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th>Email</th>
        <th width="120">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>分類</td>
        <td>標題</td>
        <td class="text-right">200</td>
        <td class="text-right">100</td>
        <td>
          <span class="text-success">啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    addOrder() {},
  },
  // created() {
  //   this.$http.get(this.apiPath.orders).then((res) => {
  //     console.log(res);
  //   });
  // },
};
</script>
