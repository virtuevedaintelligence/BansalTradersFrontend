import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import CategoryService from "../../../services/CategoryService";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "./DryFruit";
import DryFruitDetail from "./DryFruitDetail";

function DryFruits() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProducts();
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [Catloading, CatsetLoading] = useState(true);
  const [categories, setCategory] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      CatsetLoading(true);
      try {
        const response1 = await CategoryService.getCategories();
        console.log(response1.data);
        setCategory(response1.data);
      } catch (error) {
        console.log(error);
      }
      CatsetLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="scrollmenu">
        {!Catloading && (
          <div>
            {categories.map((category) => (
              <a key={category.id} href="#home">
                {category.categoryName}
              </a>
            ))}
          </div>
        )}
      </div>
      <MDBContainer fluid className="my-5">
        {!loading && (
          <MDBRow>
            {products.map((product) => (
              <DryFruit key={product.productId} product={product}></DryFruit>
            ))}
          </MDBRow>
        )}
      </MDBContainer>
      {/* <DryFruitDetail /> */}
    </>
  );
}

export default DryFruits;
