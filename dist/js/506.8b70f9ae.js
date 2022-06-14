"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[506],{4827:function(t,e,a){a.d(e,{er:function(){return k},Wf:function(){return _},dr:function(){return I},ye:function(){return C},gJ:function(){return v},FC:function(){return y},Vh:function(){return w},sG:function(){return f}});var s=a(6265),l=a.n(s);const n=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),i=()=>n.get("/cart"),r=t=>n.post("/cart",t),c=(t,e)=>n.put(`/cart/${e}`,t),o=t=>n.delete(`/cart/${t}`),d=(l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>d.post("/coupon",t),m=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),p=t=>m.get(`/order/${t}`),b=t=>m.post("/order",t),h=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),g=()=>h.get("/products"),_=i,v=r,f=c,k=o,y=u,I=p,w=b,C=g},4677:function(t,e,a){a.d(e,{x:function(){return r}});var s=a(4827),l=a(4301),n=a(6294);const i=(0,n.Z)(),r=(0,l.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){i.isLoading=!0,await(0,s.Wf)().then((t=>{this.cart=t.data.data})).catch((t=>{})),i.isLoading=!1},async addCartItem(t,e){i.cartLoadingItem=t,i.cartItemIsAdded=!1,await(0,s.gJ)({data:{product_id:t,qty:e}}).then((t=>{i.cartLoadingItem="",i.cartItemIsAdded=!0})).catch((t=>{i.cartItemIsAdded=!1})),this.getCartList()},async updateCartItem({itemId:t,qty:e}){const a=e<=0?1:e;i.cartLoadingItem=t,await(0,s.sG)({data:{product_id:t,qty:a}},t).then((t=>{})).catch((t=>{})),this.getCartList(),i.cartLoadingItem=""},async deleteCartItem(t){i.cartDeletedItem=t,await(0,s.er)(t).then((t=>{})).catch((t=>{})),this.getCartList(),i.cartDeletedItem=""}}})},4238:function(t,e,a){a.d(e,{a:function(){return n}});var s=a(4827),l=a(4301);const n=(0,l.Q_)("product",{state:()=>({origin:[]}),getters:{thermos:t=>t.origin.filter((t=>"thermos"===t.category)).map((t=>{const e=t.title.slice(t.title.indexOf("-")+2,t.length),a={"胡克綠":"classic-green","灰玫紅":"classic-red","灰丁寧藍":"classic-blue"},s=a[e]??"unassigned";return{...t,chtColor:e,engColor:s}})).sort(((t,e)=>e.num-t.num))},actions:{async getProduct(){await(0,s.ye)().then((t=>{t.data.success&&(this.origin=t.data.products)})).catch((t=>{}))}}})},6294:function(t,e,a){var s=a(4301);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1})})},9849:function(t,e,a){a.d(e,{Z:function(){return k}});var s=a(3396),l=a(7139);const n={class:"py-4"},i={class:"nav justify-content-center border-top py-3 my-3"},r=(0,s.Uk)("商品資訊"),c=(0,s.Uk)("線上訂購"),o=(0,s.Uk)("訂單查詢"),d=(0,s.Uk)("關於我們"),u=(0,s._)("p",{class:"text-muted text-center fs-7"},"Copyright © 2022 CHIRP鳥牌. All rights reserved",-1),m={class:"text-muted text-center fs-7"},p=(0,s.Uk)(" Designed/Developed by: Sam Chiu | Admin portal: "),b=(0,s.Uk)("Dashboard"),h=(0,s.uE)('<ul class="list-group flex-row justify-content-center align-items-center"><li class="list-group-item bg-transparent border-0"><a href="https://www.linkedin.com/in/sam-chiu-4b7557137/" class="link-secondary" target="_blank"><span class="visually-hidden">Link of Sam Chiu&#39;s LinkedIn page</span><i class="bi bi-linkedin fs-3"></i></a></li><li class="list-group-item bg-transparent border-0"><a href="https://github.com/samchiu064" class="link-secondary" target="_blank"><span class="visually-hidden">Link of Sam Chiu&#39;s GitHub page</span><i class="bi bi-github fs-3"></i></a></li><li class="list-group-item bg-transparent border-0"><a href="mailto: samchiu064@gmail.com" class="link-secondary"><span class="visually-hidden">Send an email to samchiu064@gmail.com</span><i class="bi bi-envelope-fill fs-3"></i></a></li></ul>',1);function g(t,e,a,g,_,v){const f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("footer",n,[(0,s._)("nav",i,[(0,s.Wm)(f,{to:"/thermos/classic",class:(0,l.C_)(["nav-link d-none d-lg-block link-secondary underline",{"nav-link--selected":"thermosClassic"===this.$route.name}])},{default:(0,s.w5)((()=>[r])),_:1},8,["class"]),(0,s.Wm)(f,{to:"/thermos/classic/details/classic-green",class:(0,l.C_)(["nav-link d-none d-lg-block link-secondary underline",{"nav-link--selected":"thermosClassicDetails"===this.$route.name}])},{default:(0,s.w5)((()=>[c])),_:1},8,["class"]),(0,s.Wm)(f,{to:"/order-check",class:(0,l.C_)(["nav-link d-none d-lg-block link-secondary underline",{"nav-link--selected":"orderCheck"===this.$route.name}])},{default:(0,s.w5)((()=>[o])),_:1},8,["class"]),(0,s.Wm)(f,{to:"/about-us",class:(0,l.C_)(["nav-link d-none d-lg-block link-secondary underline",{"nav-link--selected":"aboutUs"===this.$route.name}])},{default:(0,s.w5)((()=>[d])),_:1},8,["class"])]),u,(0,s._)("p",m,[p,(0,s.Wm)(f,{to:"/dashboard",class:"link-secondary"},{default:(0,s.w5)((()=>[b])),_:1})]),h])}var _={},v=a(89);const f=(0,v.Z)(_,[["render",g]]);var k=f},8686:function(t,e,a){a.d(e,{Z:function(){return b}});var s=a(3396);const l=["disabled"],n={for:"qty",class:"w-25 align-middle"},i=["disabled","value"],r=["disabled"];function c(t,e,a,c,o,d){return(0,s.wg)(),(0,s.iD)(s.HY,null,[a.hasOperators?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn bi bi-dash fs-3 text-black-50",disabled:t.cartDeletedItem===a.itemId||1===a.qty,onClick:e[0]||(e[0]=e=>t.$emit("updateItem",{qty:a.qty-1,itemId:a.itemId}))},null,8,l)):(0,s.kq)("",!0),(0,s._)("label",n,[(0,s._)("input",{type:"number",class:"rounded form-control text-center w-100 text-black-50 bg-transparent",id:"qty",min:"1",disabled:t.cartDeletedItem===a.itemId||!a.hasOperators,value:a.qty,onChange:e[1]||(e[1]=e=>t.$emit("update:value",Number(e.target.value)))},null,40,i)]),a.hasOperators?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"btn bi bi-plus fs-3 text-black-50",disabled:t.cartDeletedItem===a.itemId,onClick:e[2]||(e[2]=e=>t.$emit("updateItem",{qty:a.qty+1,itemId:a.itemId}))},null,8,r)):(0,s.kq)("",!0)],64)}var o=a(6294),d=a(4301),u={props:{hasOperators:{type:Boolean,default:!0},qty:{type:Number,default:1},itemId:{type:String,default:"defaultId"}},emits:["updateItem","update:value"],computed:{...(0,d.rn)(o.Z,["cartDeletedItem"])}},m=a(89);const p=(0,m.Z)(u,[["render",c],["__scopeId","data-v-893b448e"]]);var b=p},1506:function(t,e,a){a.r(e),a.d(e,{default:function(){return yt}});var s=a(3396),l=a(7139),n=a(9242);const i=t=>((0,s.dD)("data-v-02327a82"),t=t(),(0,s.Cn)(),t),r={class:"bg-light"},c={class:"container p-3 p-md-5 mt-3"},o={class:"row row-cols-1 row-cols-md-2 mb-2"},d={class:"col"},u={class:"text-center d-flex align-items-center justify-content-center"},m=["src"],p={class:"col"},b={class:"text-center text-md-start m-auto mx-md-0"},h={class:"mt-3 mt-md-0"},g=i((()=>(0,s._)("h3",{style:{display:"none"}},"價格",-1))),_={class:"fs-3 fw-bold"},v={class:"mt-3 mb-4"},f=i((()=>(0,s._)("h3",{class:"fs-6 fw-bold"},"顏色",-1))),k={class:"nav"},y={class:"mt-1"},I=i((()=>(0,s._)("div",{class:"mt-3 mb-4"},[(0,s._)("h3",{class:"fs-6 fw-bold"},"配送方式"),(0,s._)("label",{for:"home-delivery",class:"ps-3"},[(0,s._)("input",{type:"radio",name:"homeDelivery",id:"home-delivery",checked:""}),(0,s.Uk)(" 宅配配送 ")])],-1))),w={class:"mt-3"},C=i((()=>(0,s._)("h3",{class:"fs-6 fw-bold"},"數量",-1))),P=i((()=>(0,s._)("span",{class:"align-middle"},"庫存充足",-1))),U={class:"mt-4 mb-5 text-center text-md-start"},x={class:"d-inline-block position-relative ms-4 w-45"},q=["disabled"],D={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},L=i((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),$=[L],S={key:1,class:"bi bi-cart-dash text-white me-1"},T=(0,s.Uk)(" 加入購物車 "),W=i((()=>(0,s._)("i",{class:"bi bi-check"},null,-1))),Z=(0,s.Uk)("商品成功加入購物車"),A=[W,Z],H={class:"bg-white"},R={class:"container p-3 p-md-5"},j={class:"row row-cols-1"},F=i((()=>(0,s._)("span",{class:"link-classic-green fw-medium"},"商品詳情",-1))),O=i((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"產品規格"),(0,s._)("dd",null,[(0,s._)("ul",null,[(0,s._)("li",null,"容量(cc)：480"),(0,s._)("li",null,"長Ｘ寬Ｘ高(cm)：6.6x7.2x21.8"),(0,s._)("li",null,"重量(kg)：0.19"),(0,s._)("li",null,"保溫效力(24小時)：68oc以上"),(0,s._)("li",null,"保冷效力(24小時)：8oc以下"),(0,s._)("li",null,"外蓋/本體材質：PP/不鏽鋼SUS304")])])],-1))),z=i((()=>(0,s._)("span",{class:"link-classic-green fw-medium"},"運送資訊",-1))),E=i((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"寄送時間"),(0,s._)("dd",null,"宅配配送全台灣24h到貨；超商取貨全台灣72h到貨。全年無休，週末假日照常出貨。"),(0,s._)("dt",null,"運送方式"),(0,s._)("dd",null,[(0,s.Uk)(" 透過宅配送達。除網頁另有特別標示外，均為常溫配送。"),(0,s._)("br"),(0,s.Uk)(" 消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。 ")]),(0,s._)("dt",null,"運送範圍"),(0,s._)("dd",null," 限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。 ")],-1))),Q=i((()=>(0,s._)("span",{class:"link-classic-green fw-medium"},"退款政策",-1))),Y=i((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"退款須知"),(0,s._)("dd",null,[(0,s.Uk)(" 消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態） 並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。"),(0,s._)("br"),(0,s.Uk)(" 若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要 求之單據，以利本公司為您辦理退款。"),(0,s._)("br"),(0,s.Uk)(" 本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。 ")])],-1)));function G(t,e,a,i,L,W){const Z=(0,s.up)("router-link"),G=(0,s.up)("StoreProductInput"),N=(0,s.up)("StoreTabsProductDetail"),V=(0,s.up)("StoreFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("main",null,[(0,s._)("section",r,[(0,s._)("div",c,[(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("div",u,[((0,s.wg)(),(0,s.iD)("img",{src:L.tempProduct.imageUrl,key:L.tempProduct.id,alt:"保溫瓶圖片",class:"img-box"},null,8,m))])]),(0,s._)("div",p,[(0,s._)("div",b,[(0,s._)("h2",h,(0,l.zw)(L.tempProduct.title),1),g,(0,s._)("span",_,"NT $"+(0,l.zw)(L.tempProduct.price?.toLocaleString("en-us")),1),(0,s._)("p",v,(0,l.zw)(L.tempProduct.description),1)]),(0,s._)("div",null,[f,(0,s._)("ul",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.thermos,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,class:"nav-item m-3 mb-1 text-center"},[(0,s.Wm)(Z,{to:`/thermos/classic/details/${t.engColor}`,class:(0,l.C_)(["btn bg-classic-green p-3 rounded-circle d-inline-block",`bg-${t.engColor}`]),onClick:(0,n.iM)((e=>W.switchProduct(t)),["prevent"])},null,8,["to","class","onClick"]),(0,s._)("p",y,(0,l.zw)(t.chtColor),1)])))),128))])]),I,(0,s._)("div",w,[C,(0,s.Wm)(G,{qty:L.tempProduct.qty,onUpdateItem:W.updateItem,"onUpdate:value":e[0]||(e[0]=t=>L.tempProduct.qty=t)},null,8,["qty","onUpdateItem"]),P]),(0,s._)("div",U,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary rounded-pill w-45 py-2",onClick:e[1]||(e[1]=t=>W.purchaseItem(L.tempProduct.id,L.tempProduct.qty))}," 立即購買 "),(0,s._)("div",x,[(0,s._)("button",{type:"button",class:"btn btn-dark rounded-pill w-100 py-2",disabled:t.cartLoadingItem===L.tempProduct.id,onClick:e[2]||(e[2]=e=>t.addCartItem(L.tempProduct.id,L.tempProduct.qty))},[t.cartLoadingItem===L.tempProduct.id?((0,s.wg)(),(0,s.iD)("div",D,$)):((0,s.wg)(),(0,s.iD)("i",S)),T],8,q),(0,s._)("span",{class:(0,l.C_)(["text-success w-100 position-absolute top-100 start-50 translate-middle text-center",{"cart-message--success":t.cartItemIsAdded,invisible:!t.cartItemIsAdded}])},A,2)])])])])])]),(0,s._)("section",H,[(0,s._)("div",R,[(0,s._)("div",j,[(0,s.Wm)(N,null,{titleFirstTab:(0,s.w5)((()=>[F])),firstTab:(0,s.w5)((()=>[O])),titleSecondTab:(0,s.w5)((()=>[z])),secondTab:(0,s.w5)((()=>[E])),titleThirdTab:(0,s.w5)((()=>[Q])),thirdTab:(0,s.w5)((()=>[Y])),_:1})])])])]),(0,s.Wm)(V)],64)}var N=a(4301),V=a(4238),J=a(4677),B=a(6294),K=a(9849);const M={class:"col"},X={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},tt={class:"nav-link active",id:"nav-details-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},et=(0,s.Uk)("商品詳情"),at={class:"nav-link",id:"nav-delivery-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},st=(0,s.Uk)("運送資訊"),lt={class:"nav-link",id:"nav-refund-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},nt=(0,s.Uk)("退款政策"),it={class:"col tab-content",id:"nav-tabContent"},rt={class:"tab-pane fade show active border border-top-0 p-3",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-details-tab"},ct=(0,s.Uk)("更新中"),ot={class:"tab-pane fade border border-top-0 p-3",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-delivery-tab"},dt=(0,s.Uk)("更新中"),ut={class:"tab-pane fade border border-top-0 p-3",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-refund-tab"},mt=(0,s._)("dl",null,[(0,s._)("dt",null,"退款須知"),(0,s._)("dd",null,[(0,s.Uk)(" 消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態） 並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。"),(0,s._)("br"),(0,s.Uk)(" 若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要 求之單據，以利本公司為您辦理退款。"),(0,s._)("br"),(0,s.Uk)(" 本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。 ")])],-1);function pt(t,e,a,l,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",M,[(0,s._)("div",X,[(0,s._)("button",tt,[(0,s.WI)(t.$slots,"titleFirstTab",{},(()=>[et]))]),(0,s._)("button",at,[(0,s.WI)(t.$slots,"titleSecondTab",{},(()=>[st]))]),(0,s._)("button",lt,[(0,s.WI)(t.$slots,"titleThirdTab",{},(()=>[nt]))])])]),(0,s._)("div",it,[(0,s._)("div",rt,[(0,s.WI)(t.$slots,"firstTab",{},(()=>[ct]))]),(0,s._)("div",ot,[(0,s.WI)(t.$slots,"secondTab",{},(()=>[dt]))]),(0,s._)("div",ut,[(0,s.WI)(t.$slots,"thirdTab",{},(()=>[mt]))])])],64)}var bt={},ht=a(89);const gt=(0,ht.Z)(bt,[["render",pt]]);var _t=gt,vt=a(8686),ft={components:{StoreProductInput:vt.Z,StoreTabsProductDetail:_t,StoreFooter:K.Z},data(){return{tempProduct:{}}},computed:{...(0,N.rn)(V.a,["thermos"]),...(0,N.rn)(B.Z,["cartLoadingItem"]),...(0,N.Ah)(B.Z,["cartItemIsAdded"])},methods:{switchProduct(t){this.tempProduct={...t,qty:1}},updateItem({qty:t}){const e=t<=0?1:t;this.tempProduct.qty=e},async purchaseItem(t,e){await this.addCartItem(t,e),this.cartItemIsAdded=!1,this.$router.push({name:"cart"})},renderProduct(){"classic-red"===this.$route.params.color?this.tempProduct={...this.thermos[1],qty:1}:"classic-blue"===this.$route.params.color?this.tempProduct={...this.thermos[2],qty:1}:this.tempProduct={...this.thermos[0],qty:1}},...(0,N.nv)(V.a,["getProduct"]),...(0,N.nv)(J.x,["addCartItem"])},async created(){this.$Progress.start(),await this.getProduct(),this.renderProduct(),this.$Progress.finish()}};const kt=(0,ht.Z)(ft,[["render",G],["__scopeId","data-v-02327a82"]]);var yt=kt}}]);
//# sourceMappingURL=506.8b70f9ae.js.map