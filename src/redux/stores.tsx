import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
