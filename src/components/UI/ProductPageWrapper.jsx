import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ProductPageWrapper = styled(Box)({
    display: "flex",
    gap: "8rem",
    alignItems: "center",
    padding: "0 3.8rem",
    marginBottom: "40px",
    ["@media(max-width:1280px)"]: {
        gap: "4rem",
        padding: "0 3rem",
    },
    ["@media(max-width:860px)"]: {
        gap: "2.5rem",
        padding: "0 2rem",
    },
    ["@media(max-width:740px)"]: {
        flexDirection: "column",
        padding: "0 2rem",
        gap: "20px",
    },
    ["@media(max-width:435px)"]: {
        padding: "0",
        gap: "20px",
    },
});

export default ProductPageWrapper;
