import React from "react";
import Slider from "./Slider";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import DryFruit from "../products/dryfruits/DryFruit";
import { useProductContext } from "../../context/productcontext";
import FeaturedProduct from "./FeaturedProduct";
import { Container } from "react-bootstrap";
import DryFruitDetail from "../products/dryfruits/DryFruitDetail";

export default function Home() {
  const { isLoading, featuredProducts } = useProductContext();
  if (isLoading) {
    return (
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <>
      <Slider />
      <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Featured Products</h2>
      <Container className="py-5 m-auto">
        <section className="container mx-auto py-5">
          <div className="row">
            {featuredProducts.map((product) => {
              return <FeaturedProduct key={product.productId} product={product} />;
            })}
          </div>
        </section>
      </Container>
      <DryFruitDetail />
    </>
  );
}
