import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";

import { rulesReducer } from "../entities/rules/model/rulesReducer";
import { questionReducer } from "../entities/game/model/questionReducer";

export const rootReducer = combineReducers({
  rulesReducer,
  questionReducer,
});

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;
