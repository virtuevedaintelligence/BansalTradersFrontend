const ProductReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PRODUCT_DATA":
      const featuredProd = action.payload.filter((curElement) => curElement.featured === true);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredProd,
      };
    case "PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLoading: true,
      };
    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isError: true,
      };
    case "SAVE_PRODUCT_LOADING":
      return {
        ...state,
        isSaveProductLoading: true,
      };
    case "SAVE_PRODUCT":
      return {
        ...state,
        isSaveProductLoading: false,
        saveProduct: action.payload,
      };
    case "SAVE_ERROR":
      return {
        ...state,
        isSaveProductLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
