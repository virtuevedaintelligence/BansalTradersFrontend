import { createContext, useContext, useEffect, useReducer } from "react";
import CategoryService from "../services/CategoryService";
import reducer from "../reducer/categoryReducer";

const CategoryContext = createContext();
const initialState = {
  isLoadingCategory: false,
  isError: false,
  categories: [],
};

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "CATEGORY_LOADING" });
    try {
      const response = await CategoryService.getCategories();
      const categories = await response.data;
      dispatch({ type: "SET_CATEGORY_DATA", payload: categories });
    } catch (error) {
      console.log(error);
      dispatch({ type: "CATEGORY_ERROR" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <CategoryContext.Provider value={{ ...state }}>{children}</CategoryContext.Provider>;
};

//custom hook

const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export { CategoryProvider, CategoryContext, useCategoryContext };
