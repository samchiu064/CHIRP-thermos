import {
  getCouponList,
  postCouponItem,
  putCouponItemDetail,
  deleteCoupon,
} from './adminCoupon.js';

import {
  getOrderList,
  putOrderItemDetail,
  deleteOrder,
  deleteOrderAll,
} from './adminOrder.js';

import {
  getProductListByPage,
  getProductListAll,
  postProductItem,
  putProductItemDetail,
  deleteProduct,
} from './adminProduct';

import { postUploadImage } from './adminUpload';

export const apiGetCouponList = getCouponList;
export const apiPostCouponItem = postCouponItem;
export const apiPutCouponItemDetail = putCouponItemDetail;
export const apiDeleteCoupon = deleteCoupon;
export const apiGetOrderList = getOrderList;
export const apiPutOrderItemDetail = putOrderItemDetail;
export const apiDeleteOrder = deleteOrder;
export const apiDeleteOrderAll = deleteOrderAll;
export const apiGetProductListByPage = getProductListByPage;
export const apiGetProductListAll = getProductListAll;
export const apiPostProductItem = postProductItem;
export const apiPutProductItemDetail = putProductItemDetail;
export const apiDeleteProduct = deleteProduct;
export const apiPostUploadImage = postUploadImage;
