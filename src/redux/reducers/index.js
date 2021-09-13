import { combineReducers } from "redux";

import artcileReducer from "./articleReducer";

const rootReducer = combineReducers({
  articles: artcileReducer,
});

export default rootReducer;
