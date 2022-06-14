"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[234,468],{4827:function(t,e,a){a.d(e,{er:function(){return w},Wf:function(){return g},dr:function(){return k},ye:function(){return L},gJ:function(){return _},FC:function(){return I},Vh:function(){return v},sG:function(){return y}});var r=a(6265),s=a.n(r);const l=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),d=()=>l.get("/cart"),o=t=>l.post("/cart",t),n=(t,e)=>l.put(`/cart/${e}`,t),i=t=>l.delete(`/cart/${t}`),c=(s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>c.post("/coupon",t),m=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),p=t=>m.get(`/order/${t}`),b=t=>m.post("/order",t),h=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),f=()=>h.get("/products"),g=d,_=o,y=n,w=i,I=u,k=p,v=b,L=f},4677:function(t,e,a){a.d(e,{x:function(){return o}});var r=a(4827),s=a(4301),l=a(6294);const d=(0,l.Z)(),o=(0,s.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){d.isLoading=!0,await(0,r.Wf)().then((t=>{this.cart=t.data.data})).catch((t=>{})),d.isLoading=!1},async addCartItem(t,e){d.cartLoadingItem=t,d.cartItemIsAdded=!1,await(0,r.gJ)({data:{product_id:t,qty:e}}).then((t=>{d.cartLoadingItem="",d.cartItemIsAdded=!0})).catch((t=>{d.cartItemIsAdded=!1})),this.getCartList()},async updateCartItem({itemId:t,qty:e}){const a=e<=0?1:e;d.cartLoadingItem=t,await(0,r.sG)({data:{product_id:t,qty:a}},t).then((t=>{})).catch((t=>{})),this.getCartList(),d.cartLoadingItem=""},async deleteCartItem(t){d.cartDeletedItem=t,await(0,r.er)(t).then((t=>{})).catch((t=>{})),this.getCartList(),d.cartDeletedItem=""}}})},6294:function(t,e,a){var r=a(4301);e["Z"]=(0,r.Q_)("statusStore",{state:()=>({isLoading:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1})})},8686:function(t,e,a){a.d(e,{Z:function(){return b}});var r=a(3396);const s=["disabled"],l={for:"qty",class:"w-25 align-middle"},d=["disabled","value"],o=["disabled"];function n(t,e,a,n,i,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[a.hasOperators?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn bi bi-dash fs-3 text-black-50",disabled:t.cartDeletedItem===a.itemId||1===a.qty,onClick:e[0]||(e[0]=e=>t.$emit("updateItem",{qty:a.qty-1,itemId:a.itemId}))},null,8,s)):(0,r.kq)("",!0),(0,r._)("label",l,[(0,r._)("input",{type:"number",class:"rounded form-control text-center w-100 text-black-50 bg-transparent",id:"qty",min:"1",disabled:t.cartDeletedItem===a.itemId||!a.hasOperators,value:a.qty,onChange:e[1]||(e[1]=e=>t.$emit("update:value",Number(e.target.value)))},null,40,d)]),a.hasOperators?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"btn bi bi-plus fs-3 text-black-50",disabled:t.cartDeletedItem===a.itemId,onClick:e[2]||(e[2]=e=>t.$emit("updateItem",{qty:a.qty+1,itemId:a.itemId}))},null,8,o)):(0,r.kq)("",!0)],64)}var i=a(6294),c=a(4301),u={props:{hasOperators:{type:Boolean,default:!0},qty:{type:Number,default:1},itemId:{type:String,default:"defaultId"}},emits:["updateItem","update:value"],computed:{...(0,c.rn)(i.Z,["cartDeletedItem"])}},m=a(89);const p=(0,m.Z)(u,[["render",n],["__scopeId","data-v-893b448e"]]);var b=p},3371:function(t,e,a){a.d(e,{Z:function(){return _}});var r=a(3396),s=a(7139);const l={class:"table-responsive"},d={class:"table text-nowrap align-middle table-borderless border mb-3"},o=(0,r._)("thead",{class:"table-light border-bottom"},[(0,r._)("tr",null,[(0,r._)("th",{colspan:"2",scope:"col",class:"fw-normal"},"訂單資訊")])],-1),n=(0,r._)("th",{class:"fw-medium"},"Email",-1),i=(0,r._)("th",{class:"fw-medium"},"收件人名稱",-1),c=(0,r._)("th",{class:"fw-medium"},"收件人聯絡電話",-1),u=(0,r._)("th",{class:"fw-medium"},"收件人地址",-1),m=(0,r._)("th",{class:"fw-medium"},"備註",-1),p=(0,r._)("tr",null,[(0,r._)("th",{class:"fw-medium"},"付款狀態"),(0,r._)("td",null,"尚未付款")],-1);function b(t,e,a,b,h,f){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("table",d,[o,(0,r._)("tbody",null,[(0,r._)("tr",null,[n,(0,r._)("td",null,(0,s.zw)(a.form.user.email),1)]),(0,r._)("tr",null,[i,(0,r._)("td",null,(0,s.zw)(a.form.user.name),1)]),(0,r._)("tr",null,[c,(0,r._)("td",null,(0,s.zw)(a.form.user.tel),1)]),(0,r._)("tr",null,[u,(0,r._)("td",null,(0,s.zw)(a.form.user.address),1)]),(0,r._)("tr",null,[m,(0,r._)("td",null,(0,s.zw)(a.form.message),1)]),p])])])}var h={props:{form:{type:Object,default:()=>{}}}},f=a(89);const g=(0,f.Z)(h,[["render",b]]);var _=g},3468:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var r=a(3396),s=a(7139);const l=t=>((0,r.dD)("data-v-755e897e"),t=t(),(0,r.Cn)(),t),d={class:"table align-middle table-borderless text-center border mb-3"},o={class:"table-light border-bottom"},n=l((()=>(0,r._)("th",{class:"fw-normal",scope:"col"},"商品資訊",-1))),i=l((()=>(0,r._)("th",{class:"d-none d-md-table-cell fw-normal",scope:"col"},"商品價格",-1))),c=l((()=>(0,r._)("th",{class:"d-none d-md-table-cell fw-normal",scope:"col",width:"180"},"數量",-1))),u={key:0,class:"d-none d-md-table-cell fw-normal",scope:"col"},m={key:1,class:"d-none d-md-table-cell fw-normal",scope:"col"},p={class:"col-12 col-md-auto text-center text-md-start"},b={class:"figure figure--spacing-mobile d-flex justify-content-start align-items-center flex-column flex-md-row m-0"},h={class:"img-box d-flex justify-content-center align-items-center border ms-1 me-2"},f=["src"],g={class:"fs-6 m-0"},_={class:"col-12 col-md-auto p-2"},y={class:"col-12 col-md-auto p-0"},w={key:1,class:"spinner-border spinner-border-sm",role:"status"},I=l((()=>(0,r._)("span",{class:"visually-hidden"},"Loading...",-1))),k=[I],v={key:0,class:"col-12 col-md-auto p-0"},L=["onClick"],D={key:1,class:"spinner-border spinner-border-sm align-middle",role:"status"},C=l((()=>(0,r._)("span",{class:"visually-hidden"},"Loading...",-1))),q=[C],x={key:1,class:"col-12 col-md-auto"},S={key:0,class:"border-top"},U={colspan:"4",class:"text-end fw-medium"},O=(0,r.Uk)(" 折扣"),Z={class:"fw-medium ps-3"},$={colspan:"4",class:"text-end fw-bold"},z=(0,r.Uk)(" 本訂單須支付金額"),j={class:"fw-bold ps-3"},T={key:1,colspan:"4",class:"p-4"},N=(0,r.Uk)(" 您的購物車目前沒有任何商品，"),A=(0,r.Uk)("去購物");function R(t,e,a,l,I,C){const R=(0,r.up)("StoreProductInput"),W=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("table",d,[(0,r._)("thead",o,[(0,r._)("tr",null,[n,i,c,a.isSummary?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("th",u,"變更明細")),a.isSummary?((0,r.wg)(),(0,r.iD)("th",m,"小計")):(0,r.kq)("",!0)])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.cart.carts,((e,l)=>((0,r.wg)(),(0,r.iD)("tr",{key:e+l,class:(0,s.C_)([{"td-deleted":t.cartDeletedItem===e.id,"text-muted":t.cartDeletedItem===e.id},"d-flex d-sm-table-row table-row--divider-light flex-wrap justify-content-center m-2"])},[(0,r._)("td",p,[(0,r._)("figure",b,[(0,r._)("div",h,[(0,r._)("img",{src:e.product.imageUrl,alt:"購物車商品圖",class:"img-fluid img-cart-item p-1 rounded"},null,8,f)]),(0,r._)("figcaption",null,[(0,r._)("h2",g,(0,s.zw)(e.product.title),1)])])]),(0,r._)("td",_," NT$ "+(0,s.zw)(e.product.price.toLocaleString("en-us")),1),(0,r._)("td",y,[t.cartLoadingItem!==e.id?((0,r.wg)(),(0,r.j4)(R,{key:0,hasOperators:C.hasOperators,qty:e.qty,itemId:e.id,onUpdateItem:t.updateCartItem,"onUpdate:value":a=>t.updateCartItem({itemId:e.id,qty:a})},null,8,["hasOperators","qty","itemId","onUpdateItem","onUpdate:value"])):(0,r.kq)("",!0),t.cartLoadingItem===e.id?((0,r.wg)(),(0,r.iD)("div",w,k)):(0,r.kq)("",!0)]),a.isSummary?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("td",v,[t.cartDeletedItem!==e.id?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"btn btn-deleted bi bi-trash",onClick:a=>t.deleteCartItem(e.id)},null,8,L)):(0,r.kq)("",!0),t.cartDeletedItem===e.id?((0,r.wg)(),(0,r.iD)("div",D,q)):(0,r.kq)("",!0)])),a.isSummary?((0,r.wg)(),(0,r.iD)("td",x," NT$ "+(0,s.zw)(e.total.toLocaleString("en-us")),1)):(0,r.kq)("",!0)],2)))),128))]),a.isSummary?((0,r.wg)(),(0,r.iD)("tfoot",S,[(0,r._)("tr",null,[(0,r._)("td",U,[O,(0,r._)("span",Z,"- NT$ "+(0,s.zw)(t.discount)+"元",1)])]),(0,r._)("tr",null,[(0,r._)("td",$,[z,(0,r._)("span",j," NT$ "+(0,s.zw)(t.cart.final_total?.toLocaleString("en-us"))+"元",1)])])])):(0,r.kq)("",!0),0===this.cart.carts?.length?((0,r.wg)(),(0,r.iD)("td",T,[N,(0,r.Wm)(W,{to:"/thermos/classic/details/classic-green",class:"text-decoration-none link-classic-green fw-medium"},{default:(0,r.w5)((()=>[A])),_:1})])):(0,r.kq)("",!0)])])}var W=a(4301),F=a(4677),P=a(6294),V=a(8686),Q={components:{StoreProductInput:V.Z},props:{isSummary:{type:Boolean,default:!1}},data(){return{tempItem:[]}},computed:{hasOperators(){return!this.isSummary},...(0,W.rn)(F.x,["cart","discount"]),...(0,W.rn)(P.Z,["cartLoadingItem","cartDeletedItem"])},methods:{...(0,W.nv)(F.x,["getCartList","updateCartItem","deleteCartItem"])},created(){this.getCartList()}},B=a(89);const G=(0,B.Z)(Q,[["render",R],["__scopeId","data-v-755e897e"]]);var H=G},8234:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});var r=a(3396);const s={class:"container p-3 p-md-5"},l={class:"row"},d={class:"col"},o={class:"row"},n={class:"col"},i={class:"row justify-content-center mt-3"},c={class:"col-6 col-lg-3"},u={class:"col-6 col-lg-3"},m=["disabled"],p={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},b=(0,r.Uk)(" 確認訂單 ");function h(t,e,a,h,f,g){const _=(0,r.up)("StoreUserCartProductTable"),y=(0,r.up)("StoreUserCartOrderTable");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",l,[(0,r._)("div",d,[(0,r.Wm)(_,{isSummary:!0})])]),(0,r._)("div",o,[(0,r._)("div",n,[(0,r.Wm)(y,{form:a.tempForm},null,8,["form"])])]),(0,r._)("div",i,[(0,r._)("div",c,[(0,r._)("button",{type:"button",class:"btn btn-outline-secondary rounded-pill w-100 py-2",onClick:e[0]||(e[0]=t=>this.$router.push({name:"order"}))}," 上一步 ")]),(0,r._)("div",u,[(0,r._)("button",{type:"button",class:"btn btn-dark rounded-pill w-100 py-2",onClick:e[1]||(e[1]=(...t)=>g.confirmOrder&&g.confirmOrder(...t)),disabled:f.isLoading},[f.isLoading?((0,r.wg)(),(0,r.iD)("div",p)):(0,r.kq)("",!0),b],8,m)])])])}var f=a(4827),g=a(3468),_=a(3371),y={components:{StoreUserCartProductTable:g["default"],StoreUserCartOrderTable:_.Z},props:{tempForm:{type:Object,default:()=>{}}},data(){return{orderId:"",isLoading:!1}},methods:{async confirmOrder(){this.isLoading=!0,await(0,f.Vh)({data:this.tempForm}).then((t=>{!0===t.data.success&&(this.orderId=t.data.orderId),this.isLoading=!1})).catch((t=>{})),this.$router.push({name:"checkoutOrder",params:{orderId:this.orderId}})}}},w=a(89);const I=(0,w.Z)(y,[["render",h]]);var k=I}}]);
//# sourceMappingURL=234.f9c802a9.js.map