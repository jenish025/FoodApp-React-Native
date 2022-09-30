import { USER_LOCATION } from "../models/index";

// user Location information
export const addLocation: any = (location: any) => {
  return {
    type: USER_LOCATION,
    data: location,
  };
};

//user login and user data information
