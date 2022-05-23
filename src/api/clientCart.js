import axios from "axios";

const cartRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/`,
});

// Cart related
export const getCartList = () => cartRequest.get("/cart");
export const postCartItem = (data) => cartRequest.post("/cart", data);
export const putCartItem = (data, productId) => cartRequest.put(`/cart/${productId}`, data);
export const deleteCartItem = (productId) => cartRequest.delete(`/cart/${productId}`);
export const deleteCartAll = () => cartRequest.delete("/carts");
