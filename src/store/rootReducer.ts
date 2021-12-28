import { goodsListReducer } from './reducers/goodsListReducer/goodsListReducer';
import { combineReducers } from "redux";
import { headerReducer } from "./reducers/headerReducer/headerReducer";

export const rootReducer = combineReducers({
    headerTop: headerReducer,
    goodsList: goodsListReducer,
})