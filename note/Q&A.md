1. Component 中圖片沒辦法讀取: Module not found: Error: Can't not resolve ../assets/banner.png
   -> 檔名不要加空白
2. 為什麼 content 沒有把 box 撐開
   -> 有設定定高
3. Prettier eslint 不會自動將 class 換行，觸發 max-len error
   -> 改用vetur
4. Page body 要全高會需要剪掉header的高度怎麼辦?
   -> 將header設回position: fixed
5. Eslint 和 Vetur 衝突 (single quote)
   -> 在 Vetur extension 的設定中將 JS formatter 調整成 prettier-eslint