import {
  getCartList,
  postCartItem,
  putCartItem,
  deleteCartItem,
  deleteCartAll,
} from './clientCart';

import { postCheckout } from './clientCheckout';
import { postCouponApply } from './clientCoupon';
import { getOrderList, getOrderListById, postOrder } from './clientOrder';

import {
  getProductList,
  getProductListByPage,
  getProductListAll,
  getProductDetail,
} from './clientProduct';

export const apiGetCartList = getCartList;
export const apiPostCartItem = postCartItem;
export const apiPutCartItem = putCartItem;
export const apiDeleteCartItem = deleteCartItem;
export const apiDeleteCartAll = deleteCartAll;
export const apiPostCheckout = postCheckout;
export const apiPostCouponApply = postCouponApply;
export const apiGetOrderList = getOrderList;
export const apiGetOrderListById = getOrderListById;
export const apiPostOrder = postOrder;
export const apiGetProductList = getProductList;
export const apiGetProductListByPage = getProductListByPage;
export const apiGetProductListAll = getProductListAll;
export const apiGetProductDetail = getProductDetail;
