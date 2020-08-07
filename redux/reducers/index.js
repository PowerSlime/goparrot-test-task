import { combineReducers } from "redux";

import shelves from "./shelves";
import theme from "./theme";

const rootReducer = combineReducers({ shelves, theme });
export default rootReducer;
