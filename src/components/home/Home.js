import React from "react";
import Slider from "./Slider";
import { useProductContext } from "../../context/productcontext";
import FeaturedProduct from "../products/featureproducts/FeaturedProduct";
import { Container } from "react-bootstrap";

import Contact from "../contact/Contact";
import About from "../about/About";
import Ourmission from "../ourmission/Ourmission";
import Feedbacks from "../feedbacks/Feedbacks";

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

      <Container className="featuredProduct-section m-auto">
        <h2 className="text-center">Featured Products</h2>
        <section className="mx-auto py-5">
          <div className="row px-1">
            {featuredProducts.map((product) => {
              return <FeaturedProduct key={product.productId} product={product} />;
            })}
          </div>
        </section>
      </Container>
      <Ourmission />
      <Feedbacks />
      <About />
      <Contact />
      {/* <Faq /> */}
    </>
  );
}
