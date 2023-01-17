const ProductReducer = (state, action) => {
    switch (action.type) {

        case "PRODUCT_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "SET_PRODUCT_DATA":
            const featuredProd = action.payload.filter((curElement) => curElement.featured === true);
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredProd
            }
        case "PRODUCT_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
};

export default ProductReducer;