"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[79],{5079:function(e,t,o){o.r(t),o.d(t,{default:function(){return Q}});var a=o(3396),n=o(7139);const l={class:"text-end mt-3"},s={class:"table mt-4"},d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"名稱"),(0,a._)("th",{width:"120"},"折扣百分比"),(0,a._)("th",{width:"120"},"到期日"),(0,a._)("th",{width:"120"},"折扣碼"),(0,a._)("th",{width:"120"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),i={key:0,class:"text-success"},p={key:1,class:"text-secondary"},u={class:"btn-group"},c=["onClick"],r=["onClick"];function m(e,t,o,m,h,_){const b=(0,a.up)("LoadingOverlay"),C=(0,a.up)("DashboardModalCoupon"),g=(0,a.up)("DashboardModalDelete"),w=(0,a.up)("ThePagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(b,{active:h.isLoading},null,8,["active"]),(0,a._)("div",l,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=e=>_.openModal(!0))},"建立新的優惠券")]),(0,a._)("table",s,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.coupons,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:e+t},[(0,a._)("td",null,(0,n.zw)(e.title),1),(0,a._)("td",null,(0,n.zw)(e.percent)+"%",1),(0,a._)("td",null,(0,n.zw)(e.due_date),1),(0,a._)("td",null,(0,n.zw)(e.code),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",i,"啟用")):((0,a.wg)(),(0,a.iD)("span",p,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",u,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>_.openModal(!1,e)}," 編輯 ",8,c),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>_.openDeleteModal(!1,e)}," 刪除 ",8,r)])])])))),128))])]),(0,a.Wm)(C,{ref:"couponModal",onUpdateCoupon:_.updateCoupon,coupon:h.tempCoupon},null,8,["onUpdateCoupon","coupon"]),(0,a.Wm)(g,{ref:"deleteModal",onDeleteItem:_.deleteCoupon,item:h.tempCoupon},null,8,["onDeleteItem","item"]),(0,a.Wm)(w,{pages:h.pagination,onEmitPage:_.getCoupons},null,8,["pages","onEmitPage"])],64)}var h=o(506),_=o(9242);const b={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-sm",role:"document"},g={class:"modal-content border-0"},w=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增折扣碼")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},y={class:"row"},M={class:"col-sm-12"},v={class:"mb-3"},k={for:"title",class:"form-label w-100"},D=(0,a.Uk)("優惠券名稱 "),x={class:"mb-3 col-md-12"},U={for:"percentage",class:"form-label w-100"},L=(0,a.Uk)("折扣百分比 "),$={class:"mb-3 col-md-12"},N={for:"due_date",class:"form-label w-100"},V=(0,a.Uk)("到期日 "),Z={class:"mb-3 col-md-12"},z={for:"coupon_code",class:"form-label w-100"},P=(0,a.Uk)("折扣碼 "),S={class:"mb-3"},W={class:"form-check"},j={class:"form-check-label",for:"is_enabled"},E=(0,a.Uk)(" 是否啟用 "),F={class:"modal-footer"},T=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Y(e,t,o,n,l,s){return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",C,[(0,a._)("div",g,[w,(0,a._)("div",f,[(0,a._)("div",y,[(0,a._)("div",M,[(0,a._)("div",v,[(0,a._)("label",k,[D,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入優惠券名稱","onUpdate:modelValue":t[0]||(t[0]=e=>l.tempCoupon.title=e)},null,512),[[_.nr,l.tempCoupon.title]])])]),(0,a._)("div",x,[(0,a._)("label",U,[L,(0,a.wy)((0,a._)("input",{type:"number",min:0,max:100,class:"form-control",id:"percentage",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[1]||(t[1]=e=>l.tempCoupon.percent=e)},null,512),[[_.nr,l.tempCoupon.percent,void 0,{number:!0}]])])]),(0,a._)("div",$,[(0,a._)("label",N,[V,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>l.tempCoupon.due_date=e)},null,512),[[_.nr,l.tempCoupon.due_date]])])]),(0,a._)("div",Z,[(0,a._)("label",z,[P,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入折扣碼","onUpdate:modelValue":t[3]||(t[3]=e=>l.tempCoupon.code=e)},null,512),[[_.nr,l.tempCoupon.code]])])]),(0,a._)("div",S,[(0,a._)("div",W,[(0,a._)("label",j,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=e=>l.tempCoupon.is_enabled=e)},null,512),[[_.e8,l.tempCoupon.is_enabled]]),E])])])])])]),(0,a._)("div",F,[T,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>s.updateCoupon&&s.updateCoupon(...e))},"確認")])])])],512)}var H=o(1339),I={mixins:[H.Z],props:["coupon"],data(){return{modal:{},tempCoupon:{}}},computed:{formattedCoupon(){return{...this.tempCoupon,percent:this.tempCoupon.percent?this.tempCoupon.percent:100,due_date:new Date(this.tempCoupon.due_date).getTime(),is_enabled:this.tempCoupon.is_enabled||0}}},watch:{coupon(){this.tempCoupon=this.coupon}},methods:{updateCoupon(){this.$emit("update-coupon",this.formattedCoupon)}}},J=o(89);const K=(0,J.Z)(I,[["render",Y]]);var O=K,q=o(8198),A=o(3267),B={components:{DashboardModalCoupon:O,DashboardModalDelete:q.Z,ThePagination:A.Z},inject:["pushMessageState"],data(){return{tempCoupon:{},coupons:[],pagination:{},isNew:!1,isLoading:!1}},methods:{openModal(e,t){this.tempCoupon=e?{}:t,this.$refs.couponModal.showModal(),this.isNew=e},openDeleteModal(e,t){this.tempCoupon=t,this.$refs.deleteModal.showModal(),this.isNew=e},async updateCoupon(e){this.isLoading=!0,this.isNew&&await(0,h.Ff)({data:e}).then((e=>{this.pushMessageState(e,"優惠券資料建立")})).catch((e=>{})),this.isNew||await(0,h.Fn)({data:e}).then((e=>{this.pushMessageState(e,"優惠券資料更新")})).catch((e=>{})),this.isLoading=!1,this.$refs.couponModal.hideModal(),this.getCoupons()},async deleteCoupon(){this.isLoading=!0,await(0,h.D_)(this.tempCoupon.id).then((e=>{this.pushMessageState(e,"優惠券資料刪除")})).catch((e=>{})),this.isLoading=!1,this.$refs.deleteModal.hideModal(),this.getCoupons()},async getCoupons(e=1){this.isLoading=!0,await(0,h.lJ)(e).then((e=>{this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.coupons.forEach(((e,t)=>{this.coupons[t].due_date=this.getCurrentDate(e.due_date)}))})).catch((e=>{})),this.isLoading=!1},getCurrentDate(e){const t=new Date(e),o=t.getFullYear(),a=(t.getMonth()+1<10?"0":"")+(t.getMonth()+1),n=(t.getDate()<10?"0":"")+t.getDate();return`${o}-${a}-${n}`}},created(){this.getCoupons()}};const G=(0,J.Z)(B,[["render",m]]);var Q=G}}]);
//# sourceMappingURL=79.cc51c1a0.js.map