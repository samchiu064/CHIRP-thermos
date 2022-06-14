"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[216],{4827:function(e,t,a){a.d(t,{er:function(){return v},Wf:function(){return k},dr:function(){return F},ye:function(){return C},gJ:function(){return b},FC:function(){return V},Vh:function(){return U},sG:function(){return y}});var r=a(6265),s=a.n(r);const n=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),o=()=>n.get("/cart"),l=e=>n.post("/cart",e),i=(e,t)=>n.put(`/cart/${t}`,e),c=e=>n.delete(`/cart/${e}`),u=(s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),m=e=>u.post("/coupon",e),d=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),p=e=>d.get(`/order/${e}`),h=e=>d.post("/order",e),f=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),g=()=>f.get("/products"),k=o,b=l,y=i,v=c,V=m,F=p,U=h,C=g},2057:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(3396),s=a(7139);const n={class:"py-4"},o={class:"nav justify-content-center border-top py-3 my-0"},l=(0,r.Uk)("商品資訊"),i=(0,r.Uk)("線上訂購"),c=(0,r.Uk)("訂單查詢"),u=(0,r.Uk)("關於我們"),m=(0,r._)("p",{class:"text-muted text-center fs-7"},"Copyright © 2022 CHIRP鳥牌. All rights reserved",-1),d={class:"text-muted text-center fs-7"},p=(0,r.Uk)(" Designed/Developed by: Sam Chiu | Admin portal: "),h=(0,r.Uk)("Dashboard"),f=(0,r.uE)('<ul class="list-group flex-row justify-content-center align-items-center"><li class="list-group-item bg-transparent border-0"><a href="https://www.linkedin.com/in/sam-chiu-4b7557137/" class="link-secondary" target="_blank"><span class="visually-hidden">Link of Sam Chiu&#39;s LinkedIn page</span><i class="bi bi-linkedin fs-3"></i></a></li><li class="list-group-item bg-transparent border-0"><a href="https://github.com/samchiu064" class="link-secondary" target="_blank"><span class="visually-hidden">Link of Sam Chiu&#39;s GitHub page</span><i class="bi bi-github fs-3"></i></a></li><li class="list-group-item bg-transparent border-0"><a href="mailto: samchiu064@gmail.com" class="link-secondary"><span class="visually-hidden">Send an email to samchiu064@gmail.com</span><i class="bi bi-envelope-fill fs-3"></i></a></li></ul>',1);function g(e,t,a,g,k,b){const y=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",n,[(0,r._)("nav",o,[(0,r.Wm)(y,{to:"/thermos/classic",class:(0,s.C_)(["nav-link d-block link-secondary underline fs-6 p-2 px-md-3",{"nav-link--selected":"thermosClassic"===this.$route.name}])},{default:(0,r.w5)((()=>[l])),_:1},8,["class"]),(0,r.Wm)(y,{to:"/thermos/classic/details/classic-green",class:(0,s.C_)(["nav-link d-block link-secondary underline fs-6 p-2 px-md-3",{"nav-link--selected":"thermosClassicDetails"===this.$route.name}])},{default:(0,r.w5)((()=>[i])),_:1},8,["class"]),(0,r.Wm)(y,{to:"/order-check",class:(0,s.C_)(["nav-link d-block link-secondary underline fs-6 p-2 px-md-3",{"nav-link--selected":"orderCheck"===this.$route.name}])},{default:(0,r.w5)((()=>[c])),_:1},8,["class"]),(0,r.Wm)(y,{to:"/about-us",class:(0,s.C_)(["nav-link d-block link-secondary underline fs-6 p-2 px-md-3",{"nav-link--selected":"aboutUs"===this.$route.name}])},{default:(0,r.w5)((()=>[u])),_:1},8,["class"])]),m,(0,r._)("p",d,[p,(0,r.Wm)(y,{to:"/dashboard",class:"link-secondary"},{default:(0,r.w5)((()=>[h])),_:1})]),f])}var k={},b=a(89);const y=(0,b.Z)(k,[["render",g]]);var v=y},4216:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(3396),s=a(7139);const n={class:"container mt-5"},o={class:"row"};function l(e,t,a,l,i,c){const u=(0,r.up)("router-view"),m=(0,r.up)("StoreFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("main",n,[(0,r.Wm)(u,{name:"StoreUserCartProgressBar",percentage:c.progressPercent,enableStepsArray:c.enableStepsArray,formIsValid:i.formIsValid},null,8,["percentage","enableStepsArray","formIsValid"]),(0,r._)("div",o,[(0,r.Wm)(u,{name:"StoreUserCartProductTable",class:(0,s.C_)(c.columns)},null,8,["class"]),(0,r.Wm)(u,{name:"StoreUserCartOrderForm",emailValue:i.tempForm.user.email,nameValue:i.tempForm.user.name,telValue:i.tempForm.user.tel,addressValue:i.tempForm.user.address,messageValue:i.tempForm.message,paymentMethod:i.paymentMethod,"onUpdate:emailValue":t[0]||(t[0]=e=>i.tempForm.user.email=e),"onUpdate:nameValue":t[1]||(t[1]=e=>i.tempForm.user.name=e),"onUpdate:telValue":t[2]||(t[2]=e=>i.tempForm.user.tel=e),"onUpdate:addressValue":t[3]||(t[3]=e=>i.tempForm.user.address=e),"onUpdate:messageValue":t[4]||(t[4]=e=>i.tempForm.message=e),"onUpdate:paymentMethod":t[5]||(t[5]=e=>i.paymentMethod=e),onValidateForm:c.validateForm,class:"col-12 col-lg-8"},null,8,["emailValue","nameValue","telValue","addressValue","messageValue","paymentMethod","onValidateForm"]),(0,r.Wm)(u,{name:"StoreUserCartSpreadsheet",nextPage:c.nextPage,formIsValid:i.formIsValid},null,8,["nextPage","formIsValid"])]),(0,r.Wm)(u,{tempForm:i.tempForm,paymentMethod:i.paymentMethod,order:i.order,onGetOrderList:c.getOrderList},null,8,["tempForm","paymentMethod","order","onGetOrderList"])]),(0,r.Wm)(m)],64)}var i=a(2057),c=a(4827),u={components:{StoreFooter:i.Z},data(){return{order:{},tempForm:{user:{email:"",name:"",tel:"",address:""},message:""},paymentMethod:"貨到付款",formIsValid:!1}},computed:{form(){const e={};return e.message=this.order.message,e.user={...this.order.user},e},nextPage(){return"cart"===this.$route.name?"order":"order"===this.$route.name?"checkout":"cart"},progressPercent(){return"order"===this.$route.name?50:"checkout"===this.$route.name?100:0},enableStepsArray(){return"order"===this.$route.name?[1,2]:"checkout"===this.$route.name?[1,2,3]:[1]},columns(){return"checkout"===this.$route.name?"col-12":"col-12 col-lg-8"}},methods:{validateForm(e){this.formIsValid=e},async getOrderList(e){await(0,c.dr)(e).then((e=>{!0===e.data.success&&(this.order=e.data.order)})).catch((e=>{}))}}},m=a(89);const d=(0,m.Z)(u,[["render",l]]);var p=d}}]);
//# sourceMappingURL=216.ad553b5c.js.map