import { Box, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    selectAmount,
    selectIsOpen,
    toggleCartModal,
} from "../../store/cart/cartSlice";
import { useTheme } from "@emotion/react";
import { useEffect } from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const amount = useSelector(selectAmount);
    const isOpen = useSelector(selectIsOpen);

    const theme = useTheme();

    // console.log("render modal");
    // console.log(isOpen);

    // useEffect(() => {
    //     console.log("effect---------------");
    //     if (isOpen) {
    //         console.log("open => listener--------------");
    //         document.addEventListener("click", () => {
    //             dispatch(toggleCartModal());
    //         });
    //     }
    // }, [isOpen]);

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
                width: "380px",
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
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                {amount ? (
                    <>
                        <Box>hello</Box>
                    </>
                ) : (
                    <Typography
                        color={theme.palette.neutral.darkGrayishBlue}
                        fontWeight="bold"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "168px",
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
