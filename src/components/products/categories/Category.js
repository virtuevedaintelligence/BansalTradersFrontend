import { useFilterContext } from "../../../context/fitercontext";
import UpdateDeleteCategory from "../admin/UpdateDeleteCategory";

function Category({ category }) {
  let {
    filters: { cat },
    filterDryfruits,
  } = useFilterContext();
  cat = category.categoryName;
  return (
    <>
      <button
        className="btn scrollmenu_button"
        name="cat"
        value={cat}
        type="button"
        onClick={(event) => {
          filterDryfruits(event);
        }}
      >
        <span>{category.categoryName}</span>
      </button>
      <UpdateDeleteCategory category={category} categoryId={category.id} />
    </>
  );
}

export default Category;
