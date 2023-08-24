import { Box, Typography } from "@mui/material";
import ProductPageWrapper from "./UI/ProductPageWrapper";
import { useTheme } from "@emotion/react";
import { calculateDiscountPrice } from "../features/calculateDiscountPrice";
import ProductRightSide from "./ProductRightSide";

const ProductPage = ({ product }) => {
    const theme = useTheme();

    let discountPrice = product.price;

    if (product.discount) {
        discountPrice = calculateDiscountPrice(product.price, product.discount);
    }

    return (
        <ProductPageWrapper>
            {/* Left */}
            <Box flex={1}>Images</Box>
            {/* Right */}
            <ProductRightSide product={product} />
        </ProductPageWrapper>
    );
};

export default ProductPage;
