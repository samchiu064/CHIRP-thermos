"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[173],{9173:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var l=a(3396),o=a(7139);const n={class:"table mt-4"},s=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"購買時間"),(0,l._)("th",null,"Email"),(0,l._)("th",null,"購買款項"),(0,l._)("th",null,"應付金額"),(0,l._)("th",null,"是否付款"),(0,l._)("th",null,"編輯")])],-1),r={class:"text-right"},i={class:"text-right"},d=["onClick"],c=(0,l._)("span",null,"已付款",-1),u=[c],p=["onClick"],h=(0,l._)("span",null,"未付款",-1),g=[h],_={class:"btn-group"},b=["onClick"];function m(t,e,a,c,h,m){const w=(0,l.up)("LoadingOverlay"),D=(0,l.up)("DashboardOrderList"),y=(0,l.up)("ThePagination"),f=(0,l.up)("DashboardModalDelete");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(w,{active:h.isLoading},null,8,["active"]),(0,l._)("table",n,[s,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.orders,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:t+e},[(0,l._)("td",null,(0,o.zw)(m.createdDate(t.create_at)),1),(0,l._)("td",null,(0,o.zw)(t.user.email),1),(0,l._)("td",r,[(0,l.Wm)(D,{order:t,form:t.user},null,8,["order","form"])]),(0,l._)("td",i,(0,o.zw)(t.total.toLocaleString("en-us")),1),(0,l._)("td",null,[t.is_paid?((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",class:"btn btn-sm btn-outline-success",title:"更改為未付款","data-bs-toggle":"tooltip","data-bs-placement":"bottom",onClick:e=>m.changePaymentStatus(t.is_paid,t.id)},u,8,d)):(0,l.kq)("",!0),t.is_paid?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:1,type:"button",class:"btn btn-sm btn-outline-danger",title:"更改為已付款","data-bs-toggle":"tooltip","data-bs-placement":"bottom",onClick:e=>m.changePaymentStatus(t.is_paid,t.id)},g,8,p))]),(0,l._)("td",null,[(0,l._)("div",_,[(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>m.openDeleteModal(t)}," 刪除 ",8,b)])])])))),128))])]),(0,l.Wm)(y,{pages:h.pagination,onEmitPage:m.getProducts},null,8,["pages","onEmitPage"]),(0,l.Wm)(f,{ref:"deleteModal",item:h.tempOrder,onDeleteItem:m.deleteOrder},null,8,["item","onDeleteItem"])],64)}var w=a(506);const D={class:"table table-striped table-hover"},y=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"品名"),(0,l._)("th",{scope:"col"},"數量"),(0,l._)("th",{scope:"col",class:"text-end"},"單價")])],-1),f={scope:"row"},k={class:"text-end"},M={class:"table table-striped table-hover"},P=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"Email"),(0,l._)("th",{scope:"col"},"收件人名稱"),(0,l._)("th",{scope:"col"},"收件人連絡電話"),(0,l._)("th",{scope:"col"},"收件人地址")])],-1),v={scope:"row"},L={scope:"row"},z={scope:"row"},O={scope:"row"};function S(t,e,a,n,s,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("table",D,[y,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.order.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",f,(0,o.zw)(t.product.title),1),(0,l._)("td",null,(0,o.zw)(t.qty)+"/"+(0,o.zw)(t.product.unit),1),(0,l._)("td",k,(0,o.zw)(t.product.price?.toLocaleString("en-us")),1)])))),128))])]),(0,l._)("table",M,[P,(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",v,(0,o.zw)(a.form.email),1),(0,l._)("td",L,(0,o.zw)(a.form.name),1),(0,l._)("td",z,(0,o.zw)(a.form.tel),1),(0,l._)("td",O,(0,o.zw)(a.form.address),1)])])])],64)}var C={props:{order:{type:Object,default:()=>{}},form:{type:Object,default:()=>{}}}},$=a(89);const H=(0,$.Z)(C,[["render",S]]);var j=H,W=a(8198),Y=a(3267),x={components:{ThePagination:Y.Z,DashboardOrderList:j,DashboardModalDelete:W.Z},inject:["pushMessageState"],data(){return{orders:[],pagination:{},isLoading:!1,tempOrder:{}}},methods:{createdDate(t){const e=new Date(t),a=e.getFullYear(),l=(e.getMonth()+1<10?"0":"")+(e.getMonth()+1),o=(e.getDate()<10?"0":"")+e.getDate(),n=(e.getHours()<10?"0":"")+e.getHours(),s=(e.getMinutes()<10?"0":"")+e.getMinutes(),r=(e.getSeconds()<10?"0":"")+e.getSeconds();return`${a}-${l}-${o} ${n}:${s}:${r}`},async getProducts(t=1){this.isLoading=!0,await(0,w.vT)(t).then((t=>{t.data.success&&(this.orders=t.data.orders,this.pagination=t.data.pagination)})).catch((t=>{})),this.isLoading=!1},async changePaymentStatus(t,e){this.isLoading=!0;const a=!t;await(0,w.P5)({data:{is_paid:a}},e).then((t=>{this.pushMessageState(t,"訂單狀態更新"),this.getProducts()})).catch((t=>{}))},async deleteOrder(t){const{id:e}=t;this.isLoading=!0,await(0,w.LW)(e).then((t=>{this.getProducts(),this.$refs.deleteModal.hideModal(),this.pushMessageState(t,"訂單刪除")})).catch((t=>{}))},openDeleteModal(t){this.tempOrder={...t,title:"此筆訂單"},this.$refs.deleteModal.showModal()}},created(){this.getProducts()}};const E=(0,$.Z)(x,[["render",m]]);var Z=E}}]);
//# sourceMappingURL=173.03f42b21.js.map