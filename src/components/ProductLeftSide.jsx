import { useSelector } from "react-redux";
import { selectProductImages } from "../store/product/productSlice";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const ProductLeftSide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = useSelector(selectProductImages);

    const media740px = useMediaQuery("@media(max-width:740px)");
    const media435px = useMediaQuery("@media(max-width:435px)");

    const theme = useTheme();

    const handleSmallImageClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePreviousArrowClick = () => {
        if (currentIndex === 0) {
            setCurrentIndex(3);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const handleNextArrowClick = () => {
        if (currentIndex === 3) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <>
            <Box flex={1}>
                <Box
                    position="relative"
                    mb={!media740px && 4}
                    borderRadius="10px"
                    overflow="hidden"
                    sx={{
                        cursor: "pointer",
                        ["@media(max-width:740px)"]: {
                            maxHeight: "340px",
                            cursor: "default",
                        },
                        ["@media(max-width:435px)"]: {
                            borderRadius: "0",
                            width: "100%",
                            height: "270px",
                        },
                    }}
                    onClick={() => {
                        if (!media740px) {
                            setIsModalOpen(true);
                        }
                    }}
                >
                    {media740px && (
                        <IconButton
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                left: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: theme.palette.neutral.white,
                                width: "40px",
                                height: "40px",
                                [":hover"]: {
                                    background: "hsla(0, 0%, 100%, 0.5)",
                                },
                            }}
                            onClick={handlePreviousArrowClick}
                        >
                            <svg
                                width="10"
                                height="15"
                                viewBox="0 0 12 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 1 3 9l8 8"
                                    stroke="#1D2026"
                                    strokeWidth="3"
                                    fill="none"
                                    // fill-rule="evenodd"
                                />
                            </svg>
                        </IconButton>
                    )}
                    <img
                        style={{ verticalAlign: "top" }}
                        width="100%"
                        src={images.big[currentIndex]}
                        alt="big"
                    />
                    {media740px && (
                        <IconButton
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                right: "15px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: theme.palette.neutral.white,
                                width: "40px",
                                height: "40px",
                                [":hover"]: {
                                    background: "hsla(0, 0%, 100%, 0.5)",
                                },
                            }}
                            onClick={handlePreviousArrowClick}
                        >
                            <svg
                                width="10"
                                height="15"
                                viewBox="0 0 12 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m2 1 8 8-8 8"
                                    stroke="#1D2026"
                                    strokeWidth="3"
                                    fill="none"
                                />
                            </svg>
                        </IconButton>
                    )}
                </Box>
                {!media740px && (
                    <Box display="flex" justifyContent="space-between">
                        {images.small.map((img, i) => (
                            <Box
                                key={img}
                                sx={{
                                    borderRadius: "13px",
                                    width: "20%",
                                    cursor: "pointer",
                                    border:
                                        currentIndex === i &&
                                        `2px solid ${theme.palette.primary.main}`,
                                    ":hover": {
                                        opacity: currentIndex !== i && 0.5,
                                    },
                                }}
                                onClick={() => handleSmallImageClick(i)}
                            >
                                <img
                                    style={{
                                        opacity: currentIndex === i && 0.27,
                                        borderRadius: "10px",
                                        verticalAlign: "top",
                                    }}
                                    height="100%"
                                    width="100%"
                                    src={img}
                                    alt="small"
                                />
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
            {isModalOpen && (
                <Box
                    position="fixed"
                    sx={{
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: theme.palette.neutral.black,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                    }}
                >
                    <Box
                        width="33%"
                        // maxHeight="400px"
                        // minWidth="400px"
                        sx={
                            {
                                // ["@media(max-width:800px)"]: {
                                //     maxWidth: "470px",
                                // },
                            }
                        }
                    >
                        <Box display="flex" justifyContent="flex-end">
                            <Box
                                sx={{ mb: 2, cursor: "pointer" }}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg
                                    width="25" //14
                                    height="24" // 15
                                    viewBox="0 0 14 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                        fill={theme.palette.neutral.white}
                                    />
                                </svg>
                            </Box>
                        </Box>
                        <Box mb={4.8} position="relative">
                            <IconButton
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    left: "-25px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: theme.palette.neutral.white,
                                    width: "55px",
                                    height: "55px",
                                    [":hover"]: {
                                        background: "hsla(0, 0%, 100%, 0.5)",
                                    },
                                }}
                                onClick={handlePreviousArrowClick}
                            >
                                <svg
                                    width="12"
                                    height="18"
                                    viewBox="0 0 12 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 1 3 9l8 8"
                                        stroke="#1D2026"
                                        strokeWidth="3"
                                        fill="none"
                                        // fill-rule="evenodd"
                                    />
                                </svg>
                            </IconButton>
                            <img
                                style={{
                                    borderRadius: "10px",
                                    verticalAlign: "top",
                                    overflow: "hidden",
                                }}
                                width="100%"
                                src={images.big[currentIndex]}
                                alt="big"
                            />
                            <IconButton
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    right: "-25px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    background: theme.palette.neutral.white,
                                    width: "55px",
                                    height: "55px",
                                    [":hover"]: {
                                        background: "hsla(0, 0%, 100%, 0.5)",
                                    },
                                }}
                                onClick={handleNextArrowClick}
                            >
                                <svg
                                    width="13"
                                    height="18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m2 1 8 8-8 8"
                                        stroke="#1D2026"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                </svg>
                            </IconButton>
                        </Box>
                        <Box display="flex" justifyContent="center" gap={4}>
                            {images.small.map((img, i) => (
                                <Box
                                    key={img}
                                    sx={{
                                        borderRadius: "13px",
                                        width: "17%",
                                        cursor: "pointer",
                                        background: theme.palette.neutral.white,
                                        border:
                                            currentIndex === i &&
                                            `2px solid ${theme.palette.primary.main}`,
                                    }}
                                    onClick={() => handleSmallImageClick(i)}
                                >
                                    <img
                                        style={{
                                            opacity: currentIndex === i && 0.27,
                                            borderRadius: "10px",
                                            verticalAlign: "top",
                                        }}
                                        height="100%"
                                        width="100%"
                                        src={img}
                                        alt="small"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ProductLeftSide;
