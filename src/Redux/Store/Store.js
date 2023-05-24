import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Features/CartSlice";
import { userReducer } from "../Features/UserSlice";
import { valueReducer } from "../Features/ValueSlice";
import { cakeReducer } from "../Features/CakeSlice";
import { addonReducer } from "../Features/AddOnSlice";
import { offerReducer } from "../Features/OfferSlice";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    cart: cartReducer,
    cake: cakeReducer,
    addon: addonReducer,
    value: valueReducer,
    user: userReducer,
    offer: offerReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})