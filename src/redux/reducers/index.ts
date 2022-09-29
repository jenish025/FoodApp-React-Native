import { combineReducers } from "redux";
import { userLocationReducer } from "./userReducer";

const rootReducer = combineReducers({
  userLocationReducer: userLocationReducer,
});

export type AppliactionState = ReturnType<typeof rootReducer>;
export { rootReducer };
