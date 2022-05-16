<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label w-100"
                  >輸入圖片網址
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                /></label>
              </div>
              <div class="mb-3">
                <label for="majorImage" class="form-label w-100">
                  <p>上傳主要圖片</p>
                  <i class="fas fa-spinner fa-spin"></i>
                  <input
                    type="file"
                    id="majorImage"
                    class="form-control"
                    @change="uploadFile('major')"
                    ref="majorImageInput"
                  />
                </label>
              </div>
              <div class="mb-3" v-for="index in 5" :key="index">
                <label :for="`minorImage${index}`" class="form-label w-100">
                  上傳次要圖片 {{ index }}
                  <i class="fas fa-spinner fa-spin"></i>
                  <input
                    type="file"
                    :id="`minorImage${index}`"
                    class="form-control"
                    @change="uploadFile('minor', index)"
                    ref="minorImageInput"
                  />
                </label>
              </div>
              <img class="img-fluid" alt="" />
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label w-100"
                  >標題
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  />
                </label>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label w-100"
                    >分類
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label w-100"
                    >單位
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </label>
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label w-100"
                    >原價
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label w-100"
                    >售價
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </label>
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label w-100"
                  >產品描述
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </label>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label w-100"
                  >說明內容
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </label>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiPostUploadImage } from "@/api/admin";
import modalMixin from "@/mixins/modalMixin";

export default {
  mixins: [modalMixin],
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) this.tempProduct.imagesUrl = [];
    },
  },
  methods: {
    uploadFile(type, key) {
      const index = key - 1; // Array index starting from zero

      const uploadedFile =
        type === "major"
          ? this.$refs.majorImageInput.files[0]
          : this.$refs.minorImageInput[index].files[0];

      const formData = new FormData(); // 2. 轉成 form-data格式
      formData.append("file-to-upload", uploadedFile);

      apiPostUploadImage(formData)
        .then((res) => {
          if (!res.data.success) return;
          if (type === "major") this.tempProduct.imageUrl = res.data.imageUrl;
          if (type === "minor") this.tempProduct.imagesUrl[index] = res.data.imageUrl;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
