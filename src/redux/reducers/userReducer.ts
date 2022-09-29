import { USER_LOCATION } from "../models/index";

const initialState = {};

export const userLocationReducer = (state = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case USER_LOCATION:
      return (state = data);

    default:
      return state;
  }
};
