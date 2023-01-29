const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
            };
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterProduct = [...allProducts];
            const { searchText, cat } = state.filters;
            if (searchText) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    var { productName } = curElem;
                    return productName.toLowerCase().includes(searchText);
                });
            }
            if (cat !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.categoryName === cat;
                });
            }
            return {
                ...state,
                filterProducts: tempFilterProduct,
            };
        default:
            return state;
    };
}


export default FilterReducer;