import React from "react";
import { useProductContext } from "../../context/productcontext";
import Shopbycategory from "./Shopbycategory";
import Slider from "./Slider";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "../products/dryfruits/DryFruit";

export default function Home() {
  const { isLoading, featuredProducts } = useProductContext();
  if (isLoading) {
    return <div>... Loading</div>
  }
  console.log(featuredProducts)
  console.log("Home")
  return (
    <>
      <Slider />
      <Shopbycategory />
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {featuredProducts.map((product) => {
            <DryFruit key={product.productId} {...product} />
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
