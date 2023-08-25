import { useTheme } from "@emotion/react";
import { calculateDiscountPrice } from "../features/calculateDiscountPrice";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import IncreaseDecreaseCountButton from "./UI/IncreaseDecreaseCountButton";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../store/product/productSlice";
import { addProductToCart, selectProducts } from "../store/cart/cartSlice";

const ProductRightSide = () => {
    const [productCount, setProductCount] = useState(0);
    const product = useSelector(selectProduct);
    const products = useSelector(selectProducts);
    const { name, description, price, discount, company } = product;
    const dispatch = useDispatch();

    const theme = useTheme();

    let discountPrice = price;

    if (discount) {
        discountPrice = calculateDiscountPrice(price, discount);
    }

    console.log(products);

    const handleClick = (e) => {
        e.stopPropagation();
        if (productCount) {
            // setProductCount(0);
            dispatch(addProductToCart(product, discountPrice, productCount));
        }
    };

    return (
        <Box flex={1} justifySelf="center">
            <Typography
                sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    letterSpacing: "1.4px",
                    marginBottom: "1.3rem",
                    ["@media(max-width:1440px)"]: {
                        fontSize: "clamp(12px, 1.1vw, 16px)",
                    },
                }}
            >
                {company.toUpperCase()} COMPANY
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: theme.palette.neutral.veryDarkBlue,
                    marginBottom: "2rem",
                    ["@media(max-width:1440px)"]: {
                        fontSize: "clamp(35px, 3.4vw, 48px)",
                    },
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.neutral.darkGrayishBlue,
                    lineHeight: 1.7,
                    fontSize: "18px",
                    letterSpacing: "1.1px",
                    marginBottom: "1.8rem",
                    ["@media(max-width:1440px)"]: {
                        fontSize: "clamp(12px, 1.3vw, 18px)",
                    },
                }}
            >
                {description}
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                marginBottom="1.8rem"
                // justifyContent="start"
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        marginBottom: "0.6rem",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            ["@media(max-width:1440px)"]: {
                                fontSize: "clamp(24px, 2.3vw, 34px)",
                            },
                        }}
                    >
                        ${discountPrice.toFixed(2)}
                    </Typography>
                    {discount && (
                        <Typography
                            sx={{
                                borderRadius: "7px",
                                fontWeight: "bold",
                                color: theme.palette.primary.main,
                                padding: "1px 9px",
                                background: theme.palette.primary.light,
                            }}
                        >
                            {discount}%
                        </Typography>
                    )}
                </Box>
                {discount && (
                    <Typography
                        fontSize="18px"
                        sx={{
                            position: "relative",
                            fontWeight: "bold",
                            color: theme.palette.neutral.grayishBlue,
                            userSelect: "none",
                            [":after"]: {
                                content: "''",
                                position: "absolute",
                                height: "1.4px",
                                bottom: "10.3px",
                                left: 0,
                                right: 0,
                                background: theme.palette.neutral.grayishBlue,
                            },
                        }}
                    >
                        ${price.toFixed(2)}
                    </Typography>
                )}
            </Box>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="35px"
            >
                <IncreaseDecreaseCountButton
                    productCount={productCount}
                    setProductCount={setProductCount}
                />
                <Button
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    sx={{
                        flex: 1.8,
                        display: "flex",
                        justifyContent: "center",
                        gap: "18px",
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: "17px",
                        color: theme.palette.neutral.white,
                        py: 1.5,
                        borderRadius: "10px",
                        ["@media(max-width:1240px)"]: {
                            flex: 1.1,
                            fontSize: "11px",
                            py: 1.9,
                            gap: "12px",
                        },
                    }}
                >
                    <svg
                        width="20px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                    >
                        <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill={theme.palette.neutral.white}
                        />
                    </svg>
                    Add to cart
                </Button>
            </Box>
        </Box>
    );
};

export default ProductRightSide;
