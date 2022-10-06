import { ALL_FOOD_DATALIST } from "../models/index";

const initialState: any = {
  food: [],
};

export const AllFoodListReducer = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case ALL_FOOD_DATALIST:
      return (state = data);

    default:
      return state;
  }
};
