const FilterReducer = (state, action) => {

  switch (action.type) {
    case "LOAD_FILTER_DRYFRUITS":
      return {
        ...state,
        filterdryfruits: [...action.payload],
        allDryfruits: [...action.payload],
      };
    case "UPDATE_FILTER_DRYFRUITS":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_DRYFRUITS":
      let { allDryfruits } = state;
      let tempFilterDryfruits = [...allDryfruits];
      const { searchText, cat } = state.filters;
      const search = searchText.toLowerCase();
      if (search) {
        tempFilterDryfruits = tempFilterDryfruits.filter((curElem) => {
          var { productName } = curElem;
          return productName.toLowerCase().includes(search);
        });
      }
      if (cat !== "all") {
        tempFilterDryfruits = tempFilterDryfruits.filter((curElem) => {
          return curElem.categoryName === cat;
        });
      }
      return {
        ...state,
        filterdryfruits: tempFilterDryfruits,
      };

    case "LOAD_FILTER_SPICES":
      return {
        ...state,
        filterspices: [...action.payload],
        allSpices: [...action.payload],
      };
    case "UPDATE_FILTER_SPICES":
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_SPICES":
      let { allSpices } = state;
      let tempFilterSpices = [...allSpices];
      const { searchText: sT, cat: c } = state.filters;
      const searchS = sT.toLowerCase();
      if (searchS) {
        tempFilterSpices = tempFilterSpices.filter((curElem) => {
          var { productName } = curElem;
          return productName.toLowerCase().includes(searchS);
        });
      }
      if (c !== "all") {
        tempFilterSpices = tempFilterSpices.filter((curElem) => {
          return curElem.categoryName === c;
        });
      }
      return {
        ...state,
        filterspices: tempFilterSpices,
      };
    default:
      return state;
  }
};

export default FilterReducer;
