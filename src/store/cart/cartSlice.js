import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    amount: 0,
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCartModal(state) {
            state.isOpen = !state.isOpen;
        },
        addProductToCart: {
            reducer(state, action) {
                state.amount += action.payload.amount;
                const extraProduct = state.products.find(
                    (product) => product.id === action.payload.id
                );
                if (extraProduct) {
                    extraProduct.totalPrice += action.payload.totalPrice;
                    extraProduct.amount += action.payload.amount;
                } else {
                    state.products.push(action.payload);
                }
            },
            prepare(product, priceByOne, amount) {
                return {
                    payload: {
                        id: product.id,
                        name: product.name,
                        img: product.img.small[0],
                        totalPrice: priceByOne * amount,
                        priceByOne,
                        amount,
                    },
                };
            },
        },
    },
});

export const selectIsOpen = (state) => state.cart.isOpen;
export const selectAmount = (state) => state.cart.amount;
export const selectProducts = (state) => state.cart.products;

export const { toggleCartModal, addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
