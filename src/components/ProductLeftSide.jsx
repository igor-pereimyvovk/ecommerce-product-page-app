import { useSelector } from "react-redux";
import { selectProductImages } from "../store/product/productSlice";
import { Box } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const ProductLeftSide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = useSelector(selectProductImages);

    const theme = useTheme();

    const handleSmallImageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Box flex={1}>
            <Box mb={4} borderRadius="10px" overflow="hidden">
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
    );
};

export default ProductLeftSide;
