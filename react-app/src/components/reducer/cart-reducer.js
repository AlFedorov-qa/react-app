import { createSlice } from "@reduxjs/toolkit";

let defaultState = { products: 0, likes: 0 };
try {
  defaultState = JSON.parse(localStorage.getItem('store')).cart;
} catch (err) {
}

export const cartSlice = createSlice({
    name: "cart",

    initialState: defaultState,

    reducers: {

        addProducts: (prevState, action) => {
            return {
                products: 1 - prevState.products,
                likes: prevState.likes,
            };
        },

        addLikes: (prevState, action) => {
            return {
                products: prevState.products,
                likes: 1 - prevState.likes
            };
        },
    },
});

export const { addProducts, addLikes } = cartSlice.actions;

export default cartSlice.reducer;