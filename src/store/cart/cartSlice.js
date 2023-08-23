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
    },
});

export const selectIsOpen = (state) => state.cart.isOpen;
export const selectAmount = (state) => state.cart.amount;

export const { toggleCartModal } = cartSlice.actions;
export default cartSlice.reducer;
