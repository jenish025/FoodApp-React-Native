import { USER_LOCATION } from "../models/index";

export const addLocation: any = (location: any) => {
  {
    type: USER_LOCATION;
    data: location;
  }
};
