import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/reducer/cart-reducer";

const logger = (store) => (next) => (action)=> {
    console.log("action",action);

    let result = next(action);

    console.log("new state", store.getState())
    return result;
};



const localstor = (store) => (next) => (action)=> {
   
    let result = next(action);

    localStorage.setItem('store', JSON.stringify(store.getState()));
    return result;
}

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: [logger, localstor],
});

export default store;