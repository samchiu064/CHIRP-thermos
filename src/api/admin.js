import {
  getCouponList,
  postCouponItem,
  putCouponItemDetail,
  deleteCoupon,
} from './adminCoupon';
import {
  getOrderList,
  putOrderItemDetail,
  deleteOrder,
  deleteOrderAll,
} from './adminOrder';
import {
  getProductListByPage,
  getProductListAll,
  postProductItem,
  putProductItemDetail,
  deleteProduct,
} from './adminProduct';
import { postUserLogin, postUserLogout, postUserCheck } from './adminLogon';
import { postUploadImage } from './adminUpload';

// Coupon
export const apiGetCouponList = getCouponList;
export const apiPostCouponItem = postCouponItem;
export const apiPutCouponItemDetail = putCouponItemDetail;
export const apiDeleteCoupon = deleteCoupon;
/// Order
export const apiGetOrderList = getOrderList;
export const apiPutOrderItemDetail = putOrderItemDetail;
export const apiDeleteOrder = deleteOrder;
export const apiDeleteOrderAll = deleteOrderAll;
// Product
export const apiGetProductListByPage = getProductListByPage;
export const apiGetProductListAll = getProductListAll;
export const apiPostProductItem = postProductItem;
export const apiPutProductItemDetail = putProductItemDetail;
export const apiDeleteProduct = deleteProduct;
// SignOn
export const apiPostUserLogin = postUserLogin;
export const apiPostUserLogout = postUserLogout;
export const apiPostUserCheck = postUserCheck;
// Upload Image
export const apiPostUploadImage = postUploadImage;
