import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const IncreaseDecreaseCountButton = ({ productCount, setProductCount }) => {
    const theme = useTheme();

    const increaseCount = () => {
        setProductCount((prev) => prev + 1);
    };
    const decreaseCount = () => {
        if (productCount > 0) setProductCount((prev) => prev - 1);
    };
    return (
        <Box
            flex={1}
            display="flex"
            borderRadius={1.4}
            sx={{ background: "hsl(223, 64%, 96%)" }}
            // sx={{ background: theme.palette.neutral.lightGrayishBlue }}
        >
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={2.7}
                sx={{
                    cursor: "pointer",
                    [":hover"]: {
                        opacity: 0.5,
                    },
                }}
                onClick={decreaseCount}
            >
                <svg
                    width="12"
                    height="4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <path
                            d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                            id="a"
                        />
                    </defs>
                    <use fill="#FF7E1B" xlinkHref="#a" />
                </svg>
            </Box>
            <Typography
                fontWeight="bold"
                color={theme.palette.neutral.veryDarkBlue}
                sx={{
                    flex: 1.4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none",
                }}
            >
                {productCount}
            </Typography>
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={2.7}
                sx={{
                    cursor: "pointer",
                    [":hover"]: {
                        opacity: 0.5,
                    },
                }}
                onClick={increaseCount}
            >
                <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <path
                            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                            id="b"
                        />
                    </defs>
                    <use fill="#FF7E1B" xlinkHref="#b" />
                </svg>
            </Box>
        </Box>
    );
};

export default IncreaseDecreaseCountButton;
