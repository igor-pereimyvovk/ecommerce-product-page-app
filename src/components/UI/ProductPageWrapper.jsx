import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ProductPageWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    gap: "8rem",
    alignItems: "center",
    padding: "0 3.8rem",
    marginBottom: "40px",
    ["@media(max-width:1280px)"]: {
        gap: "4rem",
        padding: "0 3rem",
    },
});

export default ProductPageWrapper;
