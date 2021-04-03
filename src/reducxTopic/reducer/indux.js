import {counterReducer} from './Counter'
import {userReducer} from './userReducer'
import {combineReducers} from "redux";
import {addToCard} from "./addToCard";
export const allReducer = combineReducers({
    cart: addToCard,
    counter: counterReducer,
    user: userReducer

})