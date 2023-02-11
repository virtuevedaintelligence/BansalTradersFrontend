import React from "react";
import { useFilterContext } from "../../context/fitercontext";
import "./search.css";

function Search() {
  const {
    filters: { searchText },
    filterDryfruits,
  } = useFilterContext();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="searchText" placeholder="Search" className="navSearch" value={searchText} onChange={filterDryfruits} />
      </form>
    </div>
  );
}

export default Search;
