import React from "react";
import Slider from "./Slider";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "../products/dryfruits/DryFruit";
import { useProductContext } from "../../context/productcontext";
import Shopbycategory from "./Shopbycategory";

export default function Home() {
  const { isLoading, featuredProducts } = useProductContext();
  if (isLoading) {
    return <div className="">... Loading</div>;
  }
  return (
    <>
      <Slider />
      <Shopbycategory />
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {featuredProducts.map((product) => {
            return (
              <DryFruit key={product.productId} product={product} />
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
