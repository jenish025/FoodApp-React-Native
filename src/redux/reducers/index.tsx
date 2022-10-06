import { combineReducers } from "redux";
import { AllFoodListReducer } from "./AllFoodListReducer";
import { CartUpdateReducer } from "./CartUpdateReducer";
import { userLocationReducer } from "./userReducer";

const rootReducer = combineReducers({
  userLocationReducer: userLocationReducer,
  CartUpdateReducer: CartUpdateReducer,
  AllFoodListReducer: AllFoodListReducer,
});

export type AppliactionState = ReturnType<typeof rootReducer>;
export { rootReducer };
