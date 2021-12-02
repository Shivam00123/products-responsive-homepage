import { PRODUCT_DETAILS } from "./actiontypes.js";

export function addProductDetails(name, price, image) {
  console.log("action", name, price, image);
  return {
    type: PRODUCT_DETAILS,
    name,
    price,
    image,
  };
}
