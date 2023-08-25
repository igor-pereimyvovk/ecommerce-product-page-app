import styled from "@emotion/styled";

const ProductButton = styled("button")({
    flex: 1,
    background: "transparent",
    display: "flex",
    border: "none",
    justifyContent: "center",
    alignItems: "center",
    padding: "21px 0",
    cursor: "pointer",
    [":hover"]: {
        opacity: 0.5,
    },
});

export default ProductButton;
