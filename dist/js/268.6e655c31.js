"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[268],{4827:function(t,e,r){r.d(e,{er:function(){return v},Wf:function(){return f},dr:function(){return I},ye:function(){return x},gJ:function(){return g},FC:function(){return y},Vh:function(){return L},sG:function(){return w}});var s=r(6265),a=r.n(s);const o=a().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),c=()=>o.get("/cart"),i=t=>o.post("/cart",t),l=(t,e)=>o.put(`/cart/${e}`,t),n=t=>o.delete(`/cart/${t}`),d=(a().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),a().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>d.post("/coupon",t),p=a().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=t=>p.get(`/order/${t}`),b=t=>p.post("/order",t),_=a().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),h=()=>_.get("/products"),f=c,g=i,w=l,v=n,y=u,I=m,L=b,x=h},4677:function(t,e,r){r.d(e,{x:function(){return i}});var s=r(4827),a=r(4301),o=r(6294);const c=(0,o.Z)(),i=(0,a.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){c.isLoading=!0;const t=await(0,s.Wf)();try{this.cart=t.data.data}catch(e){}c.isLoading=!1},async addCartItem(t,e){c.cartLoadingItem=t,c.cartItemIsAdded=!1;await(0,s.gJ)({data:{product_id:t,qty:e}});try{c.cartLoadingItem="",c.cartItemIsAdded=!0}catch(r){c.cartItemIsAdded=!1}this.getCartList()},async updateCartItem({itemId:t,qty:e}){const r=e<=0?1:e;c.cartLoadingItem=t;await(0,s.sG)({data:{product_id:t,qty:r}},t);c.cartLoadingItem="",this.getCartList()},async deleteCartItem(t){c.cartDeletedItem=t;await(0,s.er)(t);this.cancelOverlay(),this.getCartList()},overlayCartItem(t){c.cartItemIsOverlaid=!0,c.cartDeletedItem=t},cancelOverlay(){c.cartItemIsOverlaid=!1,c.cartDeletedItem=""}}})},6294:function(t,e,r){var s=r(4301);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1})})},2347:function(t,e,r){r.d(e,{Z:function(){return _}});var s=r(3396),a=r(7139);const o={class:"table"},c=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"品名"),(0,s._)("th",{scope:"col"},"數量"),(0,s._)("th",{scope:"col",class:"text-end"},"單價")])],-1),i={scope:"row"},l={class:"text-end"},n={class:"text-end"},d=(0,s._)("th",{scope:"row",colspan:"2"},"總價",-1);function u(t,e,r,u,p,m){return(0,s.wg)(),(0,s.iD)("table",o,[c,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.order.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",i,(0,a.zw)(t.product.title),1),(0,s._)("td",null,(0,a.zw)(t.qty)+"/"+(0,a.zw)(t.product.unit),1),(0,s._)("td",l,(0,a.zw)(t.product.price?.toLocaleString("en-us")),1)])))),128))]),(0,s._)("tfoot",n,[d,(0,s._)("td",null,"NT$ "+(0,a.zw)(r.order.total?.toLocaleString("en-us")),1)])])}var p={props:{order:{type:Object,default:()=>{}}}},m=r(89);const b=(0,m.Z)(p,[["render",u]]);var _=b},3371:function(t,e,r){r.d(e,{Z:function(){return g}});var s=r(3396),a=r(7139);const o={class:"table-responsive"},c={class:"table text-nowrap align-middle table-borderless border mb-3"},i=(0,s._)("thead",{class:"table-light border-bottom"},[(0,s._)("tr",null,[(0,s._)("th",{colspan:"2",scope:"col",class:"fw-normal"},"訂單資訊")])],-1),l=(0,s._)("th",{class:"fw-medium"},"Email",-1),n=(0,s._)("th",{class:"fw-medium"},"收件人名稱",-1),d=(0,s._)("th",{class:"fw-medium"},"收件人聯絡電話",-1),u=(0,s._)("th",{class:"fw-medium"},"收件人地址",-1),p=(0,s._)("th",{class:"fw-medium"},"備註",-1),m=(0,s._)("tr",null,[(0,s._)("th",{class:"fw-medium"},"付款狀態"),(0,s._)("td",null,"尚未付款")],-1);function b(t,e,r,b,_,h){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("table",c,[i,(0,s._)("tbody",null,[(0,s._)("tr",null,[l,(0,s._)("td",null,(0,a.zw)(r.form.user.email),1)]),(0,s._)("tr",null,[n,(0,s._)("td",null,(0,a.zw)(r.form.user.name),1)]),(0,s._)("tr",null,[d,(0,s._)("td",null,(0,a.zw)(r.form.user.tel),1)]),(0,s._)("tr",null,[u,(0,s._)("td",null,(0,a.zw)(r.form.user.address),1)]),(0,s._)("tr",null,[p,(0,s._)("td",null,(0,a.zw)(r.form.message),1)]),m])])])}var _={props:{form:{type:Object,default:()=>{}}}},h=r(89);const f=(0,h.Z)(_,[["render",b]]);var g=f},2268:function(t,e,r){r.r(e),r.d(e,{default:function(){return M}});var s=r(3396),a=r(7139),o=r(3572);const c=(0,s._)("div",{class:"row"},[(0,s._)("div",{class:"col text-center"},[(0,s._)("div",{class:"bottle-outline"},[(0,s._)("img",{src:o,alt:"",class:"bottle-outline__img"})])])],-1),i={class:"row py-2"},l={class:"col"},n=(0,s._)("p",{class:"fs-4 text-center mb-0"},"購買完成",-1),d={class:"fs-4 text-center"},u=(0,s.Uk)(" 您的訂單 "),p={class:"text-success"},m=(0,s.Uk)(" 已建立成功 "),b={class:"text-center"},_=(0,s.Uk)(" 接下來您可以考慮訂閱我們，或是 "),h=(0,s.Uk)("繼續購物"),f={class:"row mb-5"},g={class:"col-lg-6 m-auto"},w=(0,s._)("p",{class:"ps-2 pb-3 mb-0 fw-bold"},"訂閱電子報",-1),v=(0,s._)("p",{class:"ps-2"},"輸入MAIL訂閱電子報，及時獲取最新的商品資訊！",-1),y={class:"input-group mb-0"},I={key:0,class:"btn btn-outline-secondary me-3",type:"submit"},L={key:1,class:"btn btn-outline-success me-3",type:"button",id:"button-addon2",disabled:""},x={class:"row"},O={class:"col-lg-6 m-auto"},C={class:"accordion-collapse",id:"accordionOrder"},k={class:"accordion-item bg-transparent"},S=(0,s._)("h2",{class:"accordion-header",id:"headingOne"},[(0,s._)("button",{class:"accordion-button bg-transparent text-dark fw-bold",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}," 訂單詳情 ")],-1),U={id:"collapseOne",class:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionOrder"},z={class:"accordion-body"},D={class:"row justify-content-center mt-3"},W={class:"col-5 col-lg-4"},$={class:"col-5 col-lg-4"};function E(t,e,r,o,E,Z){const j=(0,s.up)("router-link"),A=(0,s.up)("VField"),q=(0,s.up)("ErrorMessage"),F=(0,s.up)("VForm"),R=(0,s.up)("StoreUserCartOrderList"),V=(0,s.up)("StoreUserCartOrderTable");return(0,s.wg)(),(0,s.iD)(s.HY,null,[c,(0,s._)("div",i,[(0,s._)("div",l,[n,(0,s._)("p",d,[u,(0,s._)("span",p,(0,a.zw)(r.order.id),1),m]),(0,s._)("p",b,[_,(0,s.Wm)(j,{to:"/thermos/classic/details/classic-green",class:"text-decoration-none link-classic-green"},{default:(0,s.w5)((()=>[h])),_:1})])])]),(0,s._)("div",f,[(0,s._)("div",g,[(0,s.Wm)(F,{onSubmit:Z.subscribe,class:"subscription-box p-3"},{default:(0,s.w5)((()=>[w,v,(0,s._)("div",y,[(0,s.Wm)(A,{name:"Email",type:"email",rules:"email",class:"form-control ms-2 bg-transparent",id:"email",placeholder:"Email",disabled:E.isSubscribed},null,8,["disabled"]),!1===E.isSubscribed?((0,s.wg)(),(0,s.iD)("button",I," 訂閱 ")):((0,s.wg)(),(0,s.iD)("button",L," 訂閱成功 "))]),(0,s.Wm)(q,{name:"Email",class:"text-danger fs-7 ms-3"})])),_:1},8,["onSubmit"])])]),(0,s._)("div",x,[(0,s._)("div",O,[(0,s._)("div",C,[(0,s._)("div",k,[S,(0,s._)("div",U,[(0,s._)("div",z,[(0,s.Wm)(R,{order:r.order},null,8,["order"]),(0,s.Wm)(V,{form:r.tempForm},null,8,["form"]),(0,s._)("div",D,[(0,s._)("div",W,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary rounded-pill w-100 py-2",onClick:e[0]||(e[0]=t=>this.$router.push({path:"/order-check",query:{order_id:this.$route.params.orderId}}))}," 查詢訂單 ")]),(0,s._)("div",$,[(0,s._)("button",{type:"button",class:"btn btn-dark rounded-pill w-100 py-2",onClick:e[1]||(e[1]=(...t)=>Z.printWindow&&Z.printWindow(...t))}," 列印此頁 ")])])])])])])])])],64)}var Z=r(2347),j=r(3371),A=r(4677),q=r(4301),F={components:{StoreUserCartOrderList:Z.Z,StoreUserCartOrderTable:j.Z},props:{order:{type:Object,default:()=>{}},tempForm:{type:Object,default:()=>{}},paymentMethod:{type:String,default:""}},data(){return{isSubscribed:!1,subscriberEmail:""}},emits:["getOrderList"],methods:{printWindow(){window.print()},subscribe(t){t.Email&&(this.subscriberEmail=t.Email,this.isSubscribed=!0)},...(0,q.nv)(A.x,["getCartList"])},created(){this.$Progress.start(),this.getCartList(),this.$emit("getOrderList",this.$route.params.orderId),this.$Progress.finish()}},R=r(89);const V=(0,R.Z)(F,[["render",E]]);var M=V},3572:function(t,e,r){t.exports=r.p+"img/bottle_outline.7d91ff02.svg"}}]);
//# sourceMappingURL=268.6e655c31.js.map