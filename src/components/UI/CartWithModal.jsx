import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, toggleCartModal } from "../../store/cart/cartSlice";
import Modal from "./Modal";
import CartSvgIcon from "./CartSvgIcon";
import { useEffect } from "react";

const CartWithModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpen);

    const media435px = useMediaQuery("@media(max-width:435px)");

    useEffect(() => {
        const handleClick = () => {
            dispatch(toggleCartModal());
        };
        if (isOpen) {
            document.addEventListener("click", handleClick);
        }

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isOpen]);

    return (
        <Box
            position={!media435px && "relative"}
            onClick={(e) => e.stopPropagation()}
        >
            <CartSvgIcon />
            <Modal />
        </Box>
    );
};

export default CartWithModal;
