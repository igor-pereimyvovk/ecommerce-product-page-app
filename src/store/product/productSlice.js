import one from "../../assets/images/image-product-1.jpg";
import two from "../../assets/images/image-product-2.jpg";
import three from "../../assets/images/image-product-3.jpg";
import four from "../../assets/images/image-product-4.jpg";
import oneSmall from "../../assets/images/image-product-1-thumbnail.jpg";
import twoSmall from "../../assets/images/image-product-2-thumbnail.jpg";
import threeSmall from "../../assets/images/image-product-3-thumbnail.jpg";
import fourSmall from "../../assets/images/image-product-4-thumbnail.jpg";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 1,
    company: "sneaker",
    name: "fall limited edition sneakers",
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    img: {
        big: [one, two, three, four],
        small: [oneSmall, twoSmall, threeSmall, fourSmall],
    },
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export const selectProductImages = (state) => state.product.img;
export const selectProduct = (state) => state.product;

export default productSlice.reducer;
