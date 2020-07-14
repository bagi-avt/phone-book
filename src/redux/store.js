import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    userPage: userReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
