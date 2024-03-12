import { createStore } from "redux";
import rootReducers from "./Reducers/combineReducer";

const store = createStore(rootReducers);

export default store;
