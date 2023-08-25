import { Box, Button, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAmount,
    selectIsOpen,
    selectProducts,
} from "../../store/cart/cartSlice";
import { useTheme } from "@emotion/react";
import CartItem from "../CartItem";

const Modal = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(selectProducts);
    const amount = useSelector(selectAmount);
    const isOpen = useSelector(selectIsOpen);

    const theme = useTheme();

    return (
        <Paper
            onClick={(e) => e.stopPropagation()}
            elevation={4}
            sx={{
                visibility: isOpen ? "visible" : "hidden",
                opacity: isOpen ? 1 : 0,
                position: "absolute",
                top: "58px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "370px",
                transition:
                    "opacity 0.1s ease-in-out, visibility 0.2s ease-in-out",
            }}
        >
            <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ padding: "1rem" }}
                textAlign="left"
                borderBottom="1px solid hsl(223, 64%, 94%)"
            >
                Cart
            </Typography>
            <Box
                sx={{
                    padding: "1rem",
                    minHeight: "180px",
                    gap: "1rem",
                }}
            >
                {amount ? (
                    <>
                        <Box display="flex" flexDirection="column" gap={3}>
                            {cartProducts.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                            <Button
                                variant="contained"
                                disableElevation
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    fontSize: "17px",
                                    color: theme.palette.neutral.white,
                                    py: 1.5,
                                    borderRadius: "10px",
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Typography
                        color={theme.palette.neutral.darkGrayishBlue}
                        fontWeight="bold"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "148px",
                        }}
                    >
                        Your cart is empty
                    </Typography>
                )}
            </Box>
        </Paper>
    );
};

export default Modal;
