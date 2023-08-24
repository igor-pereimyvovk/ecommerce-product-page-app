export const calculateDiscountPrice = (price, discount) => {
    return price - (price * discount) / 100;
};
