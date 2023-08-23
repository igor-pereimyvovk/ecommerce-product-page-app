import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectIsOpen, toggleCartModal } from "../../store/cart/cartSlice";
import Modal from "./Modal";
import CartSvgIcon from "./CartSvgIcon";
import { useEffect } from "react";

const CartWithModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectIsOpen);

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
        <Box position="relative" onClick={(e) => e.stopPropagation()}>
            <CartSvgIcon />
            <Modal />
        </Box>
    );
};

export default CartWithModal;
