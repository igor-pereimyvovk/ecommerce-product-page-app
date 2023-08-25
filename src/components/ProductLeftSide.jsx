import { useSelector } from "react-redux";
import { selectProductImages } from "../store/product/productSlice";
import { Box } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const ProductLeftSide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const images = useSelector(selectProductImages);

    const theme = useTheme();

    const handleSmallImageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <Box flex={1}>
                <Box
                    mb={4}
                    borderRadius="10px"
                    overflow="hidden"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        style={{ verticalAlign: "top" }}
                        width="100%"
                        src={images.big[currentIndex]}
                        alt="big"
                    />
                </Box>
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
            </Box>
            {isModalOpen && (
                <Box
                    position="absolute"
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
                    <Box maxWidth="33%" minWidth="520px">
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
                        <Box mb={4.8} borderRadius="10px" overflow="hidden">
                            <img
                                style={{ verticalAlign: "top" }}
                                width="100%"
                                src={images.big[currentIndex]}
                                alt="big"
                            />
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
