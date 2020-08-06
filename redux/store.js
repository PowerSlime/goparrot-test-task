import { compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistState from "redux-localstorage";

import rootReducer from "./reducers";
const enhancer = compose(persistState());

const store = createStore(rootReducer, composeWithDevTools(enhancer));
export default store;
