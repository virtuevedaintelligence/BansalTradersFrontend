const FilterReducer = (state, action) => {
  const { searchText, cat } = state.filters;
  const search = searchText.toLowerCase();
  console.log("searchText " + searchText);
  console.log("cat " + cat);
  const { name, value } = action.payload;
  switch (action.type) {
    case "LOAD_FILTER_DRYFRUITS":
      return {
        ...state,
        filterdryfruits: [...action.payload],
        allDryfruits: [...action.payload],
      };
    case "UPDATE_FILTER_DRYFRUITS":
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

      if (search) {
        tempFilterSpices = tempFilterSpices.filter((curElem) => {
          var { productName } = curElem;
          return productName.toLowerCase().includes(search);
        });
      }
      if (cat !== "all") {
        tempFilterSpices = tempFilterSpices.filter((curElem) => {
          return curElem.categoryName === cat;
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
