import {
  DETAIL_COMPONENT,
  NOT_DETAIL_COMPONENT,
  PRODUCT_DETAILS,
} from "../actions/actiontypes.js";

const initialState = {
  name: "",
  price: "",
  image: "",
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAILS:
      return {
        ...state,
        name: action.name,
        price: action.price,
        image: action.image,
      };
    default:
      return {
        ...state,
      };
  }
}
