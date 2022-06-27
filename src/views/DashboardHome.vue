<template>
  <div class="mt-6">
    <h1 class="fw-regular text-center fs-4">
      歡迎來到CHIRP鳥牌後臺管理系統，請點選上方導覽列或查看下方頁面說明 。
    </h1>
    <div class="card-group justify-content-center mt-4">
      <div class="card text-dark bg-light" style="max-width: 18rem">
        <div class="card-header">產品</div>
        <div class="card-body">
          <h5 class="card-title">新增/編輯/刪除產品</h5>
          <p class="card-text">
            商品標題、分類、單位、原價、售價、產品描述、說明內容及產品圖片的新增、編輯及刪除。
          </p>
        </div>
      </div>
      <div class="card text-dark bg-light" style="max-width: 18rem">
        <div class="card-header">訂單</div>
        <div class="card-body">
          <h5 class="card-title">編輯訂單狀態/刪除訂單</h5>
          <p class="card-text">訂單付款狀態的編輯及個別訂單的刪除。</p>
        </div>
      </div>
      <div class="card text-dark bg-light" style="max-width: 18rem">
        <div class="card-header">優惠券</div>
        <div class="card-body">
          <h5 class="card-title">新增/編輯/刪除優惠券</h5>
          <p class="card-text">
            優惠券名稱、折扣百分比、到期日、折扣碼、是否啟用的新增、編輯及刪除。
          </p>
        </div>
      </div>
      <div class="card text-dark bg-light" style="max-width: 18rem">
        <div class="card-header">登入、登出</div>
        <div class="card-body">
          <h5 class="card-title">管理員登入/登出</h5>
          <p class="card-text">帳號密碼登入及登出功能，需登入後才可進入產品、訂單、優惠券頁面。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiPostUserCheck } from '@/api/admin';

export default {
  created() {
    apiPostUserCheck()
      .then((res) => {
        if (!res.data.success) this.$router.push('/login');
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};
</script>
