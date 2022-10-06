import { USER_LOCATION, UPDATE_CART, ALL_FOOD_DATALIST } from "../models/index";

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
export const addAllFoodList: any = (foodData: any) => {
  return {
    type: ALL_FOOD_DATALIST,
    data: foodData,
  };
};

//user login and user data information
