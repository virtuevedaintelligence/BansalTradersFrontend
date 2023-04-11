import { createContext, useContext, useEffect, useReducer } from "react";
import CategoryService from "../services/CategoryService";
import reducer from "../reducer/categoryReducer";

const CategoryContext = createContext();
const initialState = {
  isLoadingCategory: false,
  isError: false,
  categories: [],
  isSaveCategoryLoading: false,
  saveCategory: {},
  isDeleteCategoryLoading: false,
  deleteCategory: {},
  isUpdateCategoryLoading: false,
  updateCategory: {},
  isErrorImportCategory: false,
  isImportCategoryLoading: false,
  importCategory: {},
};

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCategory = async () => {
    dispatch({ type: "CATEGORY_LOADING" });
    try {
      const response = await CategoryService.getCategories();
      const categories = await response.data;
      dispatch({ type: "SET_CATEGORY_DATA", payload: categories });
    } catch (error) {
      dispatch({ type: "CATEGORY_ERROR" });
    }
  };

  const saveCategoryCall = async (category, token) => {
    try {
      dispatch({ type: "SAVE_CATEGORY_LOADING" });
      const saveReponse = await CategoryService.saveCategory(category, token);
      const saveCategory = await saveReponse.data;
      dispatch({ type: "SAVE_CATEGORY_DATA", payload: saveCategory });
    } catch (error) {
      dispatch({ type: "SAVE_CATEGORY_ERROR" });
    }
  };

  const importCategoriesCall = async (categories) => {
    try {
      dispatch({ type: "IMPORT_CATEGORY_LOADING" });
      const saveReponse = await CategoryService.saveCategories(categories);
      const saveCategories = await saveReponse.data;
      dispatch({ type: "IMPORT_CATEGORY_DATA", payload: saveCategories });
    } catch (error) {
      dispatch({ type: "IMPORT_CATEGORY_ERROR" });
    }
  };

  const deleteCategoryCall = async (id) => {
    dispatch({ type: "DELETE_CATEGORY_LOADING" });
    try {
      const deleteReponse = await CategoryService.deleteCategory(id);
      const deleteCategory = await deleteReponse.data;
      dispatch({ type: "DELETE_CATEGORY", payload: deleteCategory });
    } catch (error) {
      dispatch({ type: "DELETE_ERROR" });
    }
  };

  const updateCategoryCall = async (id, category) => {
    dispatch({ type: "UPDATE_CATEGORY_LOADING" });
    try {
      const updateReponse = await CategoryService.updateCategory(category, id);
      const updateCategory = await updateReponse.data;
      dispatch({ type: "UPDATE_CATEGORY", payload: updateCategory });
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR" });
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        ...state,
        saveCategoryCall,
        deleteCategoryCall,
        updateCategoryCall,
        fetchCategory,
        importCategoriesCall,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

//custom hook

const useCategoryContext = () => {
  return useContext(CategoryContext);
};

export { CategoryProvider, CategoryContext, useCategoryContext };
