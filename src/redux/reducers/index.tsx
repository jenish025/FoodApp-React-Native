import { combineReducers } from "redux";
import { CartUpdateReducer } from "./CartUpdateReducer";
import { userLocationReducer } from "./userReducer";

const rootReducer = combineReducers({
  userLocationReducer: userLocationReducer,
  CartUpdateReducer: CartUpdateReducer,
});

export type AppliactionState = ReturnType<typeof rootReducer>;
export { rootReducer };
