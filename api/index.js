import {
  postAddProduct,
  getProductListByPage,
  getProductListAll,
  putEditProduct,
  deleteRemoveProduct,
  getOrderList,
  putEditOrder,
  deleteRemoveOrder,
  deleteRemoveOrderAll,
  postAddCoupon,
  getCouponList,
  putEditCoupon,
  deleteRemoveCoupon,
  postUploadImage,
} from './admin.js';

import {
  getProductListByPage,
  getProductListAll,
  getProductDetail,
  getCartList,
  postAddToCart,
  putEditCart,
  deleteRemoveCartItem,
  deleteRemoveCartAll,
  postApplyCoupon,
  postCreateOrder,
  getOrderList,
  getOrderListById,
  postCheckout,
} from './client.js';

export const apiPostAddProduct = postAddProduct;
export const apiGetProductListByPage = getProductListByPage;
export const apiGetProductListAll = getProductListAll;
export const apiPutEditProduct = putEditProduct;
export const apiDeleteRemoveProduct = deleteRemoveProduct;
export const apiGetOrderList = getOrderList;
export const apiPutEditOrder = putEditOrder;
export const apiDeleteRemoveOrder = deleteRemoveOrder;
export const apiDeleteRemoveOrderAll = deleteRemoveOrderAll;
export const apiPostAddCoupon = postAddCoupon;
export const apiGetCouponList = getCouponList;
export const apiPutEditCoupon = putEditCoupon;
export const apiDeleteRemoveCoupon = deleteRemoveCoupon;
export const apiPostUploadImage = postUploadImage;

export const apiGetProductListByPage = getProductListByPage;
export const apiGetProductListAll = getProductListAll;
export const apiGetProductDetail = getProductDetail;
export const apiGetCartList = getCartList;
export const apiPostAddToCart = postAddToCart;
export const apiPutEditCart = putEditCart;
export const apiDeleteRemoveCartItem = deleteRemoveCartItem;
export const apiDeleteRemoveCartAll = deleteRemoveCartAll;
export const apiPostApplyCoupon = postApplyCoupon;
export const apiPostCreateOrder = postCreateOrder;
export const apiGetOrderList = getOrderList;
export const apiGetOrderListById = getOrderListById;
export const apiPostCheckout = postCheckout;
