import { Box, Typography } from "@mui/material";
import ProductPageWrapper from "./UI/ProductPageWrapper";
import { useTheme } from "@emotion/react";
import ProductRightSide from "./ProductRightSide";
import { useSelector } from "react-redux";
import { selectProduct } from "../store/product/productSlice";

const ProductPage = () => {
    const product = useSelector(selectProduct);

    return (
        <ProductPageWrapper>
            {/* Left */}
            <Box flex={1}>
                <Box mb={4} borderRadius="10px" overflow="hidden">
                    <img
                        style={{ verticalAlign: "top" }}
                        width="100%"
                        src={product.img.big[0]}
                        alt="big"
                    />
                </Box>
                <Box display="flex" justifyContent="space-between">
                    {product.img.small.map((img) => (
                        <Box
                            key={img}
                            sx={{
                                width: "20%",
                                borderRadius: "10px",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                style={{ verticalAlign: "top" }}
                                width="100%"
                                src={img}
                                alt="small"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            {/* Right */}
            <ProductRightSide />
        </ProductPageWrapper>
    );
};
export default ProductPage;
