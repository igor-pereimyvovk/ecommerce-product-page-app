import ProductPageWrapper from "./UI/ProductPageWrapper";
import ProductRightSide from "./ProductRightSide";
import ProductLeftSide from "./ProductLeftSide";

const ProductPage = () => {
    return (
        <ProductPageWrapper>
            <ProductLeftSide />
            <ProductRightSide />
        </ProductPageWrapper>
    );
};
export default ProductPage;
