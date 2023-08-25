import { createSlice } from "@reduxjs/toolkit";
import twoSmall from "../../assets/images/image-product-2-thumbnail.jpg";

const initialState = {
    isOpen: false,
    amount: 0,
    products: [
        // {
        //     id: 2,
        //     amount: 2,
        //     img: twoSmall,
        //     name: "Fall Limited Edition Sneaker fsdfsadfasfds",
        //     priceByOne: 50,
        //     totalPrice: 100,
        // },
        // {
        //     id: 3,
        //     amount: 3,
        //     img: twoSmall,
        //     name: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima rem ad, quasi laboriosam voluptate ducimus asperiores neque eius. Autem, totam ullam voluptate fugit vitae libero magni similique nam sapiente!",
        //     priceByOne: 50,
        //     totalPrice: 150,
        // },
        // {
        //     id: 4,
        //     amount: 1,
        //     img: twoSmall,
        //     name: "Lorem ipsum dolor sit amet.",
        //     priceByOne: 50,
        //     totalPrice: 50,
        // },
    ],
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
                        img: product.img.small[0],
                        totalPrice: priceByOne * amount,
                        name: product.name,
                        priceByOne,
                        amount,
                    },
                };
            },
        },
        removeProduct(state, action) {
            console.log(action.payload);
            state.products = state.products.filter((product) => {
                if (product.id === action.payload) {
                    state.amount -= product.amount;
                    return false;
                }
                return true;
            });
        },
    },
});

export const selectIsOpen = (state) => state.cart.isOpen;
export const selectAmount = (state) => state.cart.amount;
export const selectProducts = (state) => state.cart.products;

export const { toggleCartModal, addProductToCart, removeProduct } =
    cartSlice.actions;
export default cartSlice.reducer;
