開發流程

1. App.vue 在 <style lang="scss"> 底下 import bootstrap 進來
2. assets 底下新增 all.scss
3. Under assets folder, create a new folder with name "helpers", add a new file "\_variables" (content is from node_modules > bootstrap > scss > \_variables.scss)

4. npm install --save axios vue-axios

如何將 bootstrap component 加入到專案裡?

1. 新增一個 Vue component
2. 將 BS 中的 template 貼上
3. 將 BS Modal js 引入
4. 將 component 實體化 (const modal = new Model(DOM 元素))

- 在 mounted phase 建立一個 Modal
- 將 modal 的 DOM 參數指定到 HTML template 上
  - 需在 modal template 加上 ref="modal" 以取得 DOM 元素
  - modal 的 DOM 參數改為 this.$refs.modal
- 在 data 中新增一個物件儲存 modal，並將新建立的 Modal 實體儲存至這個變數

5. 回到 Views 將 modal component import 進來
6. 將 component 進行區域註冊，並將 Modal component 加入至 template 中
