import { UPDATE_CART } from "../models/index";

const initialState: any = {
  cart: [],
};

export const CartUpdateReducer = (state = initialState, action: any) => {
  const { type, data } = action;

  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: [...state.cart, data],
      };

    default:
      return state;
  }
};
