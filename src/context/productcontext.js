import { createContext, useContext, useEffect, useReducer } from "react";
import ProductService from "../services/ProductService";
import reducer from "../reducer/productReducer";

const ProductContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: []
};

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchData = async () => {
        dispatch({ type: "PRODUCT_LOADING" });
        try {
            const response = await ProductService.getProducts();
            const products = await response.data;
            dispatch({ type: "SET_PRODUCT_DATA", payload: products });
        } catch (error) {
            console.log(error);
            dispatch({ type: "PRODUCT_ERROR" });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ProductContext.Provider value={{ ...state }}>
            {children}
        </ProductContext.Provider >
    );
};

//custom hook

const useProductContext = () => {
    return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };