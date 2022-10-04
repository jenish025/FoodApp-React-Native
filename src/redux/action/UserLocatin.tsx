import { USER_LOCATION, UPDATE_CART } from "../models/index";

// user Location information
export const addLocation: any = (location: any) => {
  return {
    type: USER_LOCATION,
    data: location,
  };
};

// Cart Update

export const addCartItem: any = (cart: any) => {
  return {
    type: UPDATE_CART,
    data: cart,
  };
};
//user login and user data information
