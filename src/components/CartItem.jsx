import { useTheme } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/material";
import { reduceName } from "../features/reduceName";
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/cart/cartSlice";

const CartItem = ({
    product: { id, name, totalPrice, priceByOne, img, amount },
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const removeItem = () => {
        console.log("clicked");
        dispatch(removeProduct(id));
    };

    let reducedName = reduceName(name);

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box width="16.3%" borderRadius="5px" overflow="hidden">
                {" "}
                {/* 55px*/}
                <img
                    style={{ verticalAlign: "top" }}
                    width="100%"
                    src={img}
                    alt="img"
                />
            </Box>
            <Box color={theme.palette.neutral.darkGrayishBlue} width="66.5%">
                <Typography textTransform="capitalize">
                    {reducedName}
                </Typography>
                <Typography letterSpacing=".3px" sx={{ wordSpacing: "2.5px" }}>
                    {`$${priceByOne.toFixed(2)} x ${amount} `}
                    <b style={{ color: theme.palette.neutral.veryDarkBlue }}>
                        ${totalPrice.toFixed(2)}
                    </b>
                </Typography>
            </Box>
            <IconButton width="10%" onClick={removeItem}>
                <svg
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <path
                            d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                            id="a"
                        />
                    </defs>
                    <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
            </IconButton>
        </Box>
    );
};

export default CartItem;
