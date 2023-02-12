import { useReducer, useContext, createContext, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterdryfruits: [],
  allDryfruits: [],
  filterspices: [],
  allSpices: [],
  filters: {
    searchText: "",
    cat: "all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { dryfruits, spices } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  //sort product
  useEffect(() => {
    dispatch({ type: "FILTER_DRYFRUITS" });
    dispatch({ type: "SORTING_DRYFRUITS" });
  }, [dryfruits, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DRYFRUITS", payload: dryfruits });
  }, [dryfruits]);

  const filterDryfruits = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_DRYFRUITS", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_SPICES" });
    dispatch({ type: "SORTING_SPICES" });
  }, [spices, state.sorting_value, state.filters]);

  const filterSpices = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_SPICES", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_SPICES", payload: spices });
  }, [spices]);
  return <FilterContext.Provider value={{ ...state, filterDryfruits, filterSpices }}>{children}</FilterContext.Provider>;
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
