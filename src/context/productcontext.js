import { createContext, useContext, useEffect, useReducer } from "react";
import ProductService from "../services/ProductService";
import reducer from "../reducer/productReducer";
import { AuthService } from "../services/AuthService";
const ProductContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  singleProduct: {},
  isSaveProductLoading: false,
  saveProduct: {},
  isDeleteProductLoading: false,
  deleteProduct: {},
  isUpdateProductLoading: false,
  updateProduct: {},
  isErrorProductReview: false,
  productReviews: {},
  isProductReviewLoading: false,
  isErrorProductFav: false,
  productfav: {},
  isProducFavLoading: false,
  dryfruits: [],
  spices: [],
  isImportProductLoading: false,
  importProduct: {},
  isImportProductError: false,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "PRODUCT_LOADING" });
    try {
      const authService = new AuthService();
      let userId = authService.getToken().userId;

      const response = await ProductService.getProducts(userId);
      const products = await response.data;
      dispatch({ type: "SET_PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "PRODUCT_ERROR" });
    }
  };

  const getSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const response = await ProductService.getProductById(id);
      const singleProduct = await response.data;
      dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  const getProductReviews = async (id) => {
    dispatch({ type: "PRODUCT_REVIEW_LOADING" });
    try {
      const response = await ProductService.getProductReviews(id);
      const productReviews = await response.data;
      dispatch({ type: "PRODUCT_REVIEW", payload: productReviews });
    } catch (error) {
      dispatch({ type: "PRODUCT_REVIEW_ERROR" });
    }
  };

  const saveProductCall = async (product, token) => {
    dispatch({ type: "SAVE_PRODUCT_LOADING" });
    try {
      const saveReponse = await ProductService.saveProduct(product, token);
      const saveProduct = await saveReponse.data;
      dispatch({ type: "SAVE_PRODUCT", payload: saveProduct });
    } catch (error) {
      dispatch({ type: "SAVE_ERROR" });
    }
  };

  const importProductCall = async (products, token) => {
    console.log(products);
    dispatch({ type: "IMPORT_PRODUCT_LOADING" });
    try {
      const imReponse = await ProductService.saveProducts(products, token);
      const imProduct = await imReponse.data;
      dispatch({ type: "IMPORT_PRODUCT", payload: imProduct });
    } catch (error) {
      dispatch({ type: "IMPORT_ERROR" });
    }
  };

  const deleteProductCall = async (id) => {
    dispatch({ type: "DELETE_PRODUCT_LOADING" });
    try {
      debugger;
      const deleteResponse = await ProductService.deleteProduct(id);
      const deleteProduct = await deleteResponse.data;
      dispatch({ type: "DELETE_PRODUCT", payload: deleteProduct });
    } catch (error) {
      dispatch({ type: "DELETE_ERROR" });
    }
  };
  const updateProductCall = async (id, product, token) => {
    dispatch({ type: "UPDATE_PRODUCT_LOADING" });
    try {
      const updateResponse = await ProductService.updateProduct(id, product);
      const updateProduct = await updateResponse.data;
      dispatch({ type: "UPDATE_PRODUCT", payload: updateProduct });
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR" });
    }
  };

  const favoriteProduct = async (productId, userId) => {
    dispatch({ type: "FAV_PRODUCT_LOADING" });
    try {
      const response = await ProductService.favoriteProduct(productId, userId);
      const favProductResponse = await response.data;
      dispatch({ type: "FAV_PRODUCT_DATA", payload: favoriteProduct });
    } catch (error) {
      dispatch({ type: "FAV_ERROR" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getSingleProduct,
        saveProductCall,
        deleteProductCall,
        updateProductCall,
        getProductReviews,
        favoriteProduct,
        importProductCall,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };
