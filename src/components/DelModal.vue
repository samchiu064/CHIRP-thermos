<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">刪除 {{ item.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            是否刪除 <b>{{ item.title }}</b
            >（刪除後將無法恢復）
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button
            type="button"
            class="btn bg-danger text-white"
            @click="$emit('delete-product', item)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  Step to create built-in component
  1. Complete HTML template (by C/P or customize)
  2. Complete JS of the component for interacive designs (by import or customize)
  3. Create an empty object in data for the compoenent, create a component instance
      in mounted phase and assign it to the object
*/
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: {},
    };
  },
  props: {
    item: {},
  },
  mixins: [modalMixin],
};
</script>
