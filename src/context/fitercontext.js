import { useReducer, useContext, createContext, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";


const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    filters: {
        searchText: "",
        cat: "all"
    },
};

const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    //sort product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products])
    const filterProduct = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    return <FilterContext.Provider value={{ ...state, filterProduct }}>{children}</FilterContext.Provider>

}

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
