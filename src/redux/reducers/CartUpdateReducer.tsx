import { UPDATE_CART } from "../models/index";

const initialState: any = {
  cart: [],
};

export const CartUpdateReducer = (state = initialState, action: any) => {
  const { type, data } = action;

  switch (type) {
    case UPDATE_CART:
      const existingFoods = state.cart.filter(
        (item: any) => item.id == data.id
      );
      //update cart if unit > 0
      if (existingFoods.length > 0) {
        let updatedCart = state.cart.map((food: any) => {
          if (food.id == data.id) {
            food.unit = data.unit;
          }
          return food;
        });
        // remove item from cart if unit is 0
        let newUpdate = updatedCart.filter((data: any) => data.unit > 0);
        return {
          ...state,
          cart: newUpdate,
        };
      } else {
        // add new item in cart
        return {
          ...state,
          cart: [...state.cart, data],
        };
      }

    default:
      return state;
  }
};
