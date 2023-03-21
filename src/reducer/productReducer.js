const ProductReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_PRODUCT_DATA":
      const featuredProd = action.payload.response.filter((curElement) => curElement.isFeatured === true);
      const dryfruitsList = action.payload.response.filter((curElement) => curElement.isActive === true)
        .filter((curElement) => curElement.categoryType === "Dryfruit");
      const spicesList = action.payload.response.filter((curElement) => curElement.isActive === true)
        .filter((curElement) => curElement.categoryType === "Spices");
      return {
        ...state,
        isLoading: false,
        products: action.payload.response,
        activeProducts: action.payload.response.filter((curElement) => curElement.isActive === true),
        featuredProducts: featuredProd,
        dryfruits: dryfruitsList,
        spices: spicesList,
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
        singleProduct: action.payload.response,
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
        saveProduct: action.payload.response,
      };
    case "SAVE_ERROR":
      return {
        ...state,
        isSaveProductLoading: false,
        isError: true,
      };
    case "IMPORT_PRODUCT_LOADING":
      return {
        ...state,
        isImportProductLoading: true,
      };
    case "IMPORT_PRODUCT":
      return {
        ...state,
        isImportProductLoading: false,
        importProduct: action.payload.response,
      };
    case "IMPORT_ERROR":
      return {
        ...state,
        isImportProductLoading: false,
        isImportProductError: true,
      };
    case "DELETE_PRODUCT_LOADING":
      return {
        ...state,
        isDeleteProductLoading: true,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        isDeleteProductLoading: false,
        deleteProduct: action.payload.response,
      };
    case "DELETE_ERROR":
      return {
        ...state,
        isDeleteProductLoading: false,
        isError: true,
      };
    case "UPDATE_PRODUCT_LOADING":
      return {
        ...state,
        isUpdateProductLoading: true,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        isUpdateProductLoading: false,
        updateProduct: action.payload.response,
      };
    case "UPDATE_ERROR":
      return {
        ...state,
        isUpdateProductLoading: false,
        isError: true,
      };
    case "PRODUCT_REVIEW_LOADING":
      return {
        ...state,
        isProductReviewLoading: true,
      };
    case "PRODUCT_REVIEW":
      return {
        ...state,
        isProductReviewLoading: false,
        productReviews: action.payload.response,
      };
    case "PRODUCT_REVIEW_ERROR":
      return {
        ...state,
        isProductReviewLoading: false,
        isErrorProductReview: true,
      };
    case "FAV_PRODUCT_LOADING":
      return {
        ...state,
        isProducFavLoading: true,
      };
    case "FAV_PRODUCT_DATA":
      return {
        ...state,
        isProducFavLoading: false,
        productfav: action.payload.response,
      };
    case "FAV_ERROR":
      return {
        ...state,
        isProducFavLoading: false,
        isErrorProductFav: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
