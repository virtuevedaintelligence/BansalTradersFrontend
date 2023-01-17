import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shopbycategory.css";

function Shopbycategory() {
  return (
    <>
      <Container className="py-5 m-auto">
        <section className="container mx-auto py-5">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Featured Products</h2>
          <div className="row">
            <div className="col-sm-4 mb-3">
              <div className="card rounded shadow-lg p-2">
                <img className="img-fluid" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                  <div className="font-bold text-xl mb-2">California Almonds</div>
                  <p className="text-dark m-0 text-base">All the way from California. Amazing quality products. Have one and order for life.</p>
                </div>
                <div className="px-6">
                  <span className="d-inline-block bg-secondary rounded  px-3 py-1 text-sm text-light m-2">#photography</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#travel</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#winter</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card rounded shadow-lg p-2">
                <img className="img-fluid" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                  <div className="font-bold text-xl mb-2">California Almonds</div>
                  <p className="text-dark m-0 text-base">All the way from California. Amazing quality products. Have one and order for life.</p>
                </div>
                <div className="px-6">
                  <span className="d-inline-block bg-secondary rounded  px-3 py-1 text-sm text-light m-2">#photography</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#travel</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#winter</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card rounded shadow-lg p-2">
                <img className="img-fluid" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                  <div className="font-bold text-xl mb-2">California Almonds</div>
                  <p className="text-dark m-0 text-base">All the way from California. Amazing quality products. Have one and order for life.</p>
                </div>
                <div className="px-6">
                  <span className="d-inline-block bg-secondary rounded  px-3 py-1 text-sm text-light m-2">#photography</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#travel</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#winter</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card rounded shadow-lg p-2">
                <img className="img-fluid" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                  <div className="font-bold text-xl mb-2">California Almonds</div>
                  <p className="text-dark m-0 text-base">All the way from California. Amazing quality products. Have one and order for life.</p>
                </div>
                <div className="px-6">
                  <span className="d-inline-block bg-secondary rounded  px-3 py-1 text-sm text-light m-2">#photography</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#travel</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#winter</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card rounded shadow-lg p-2">
                <img className="img-fluid" src="http://kolambkarashutosh.000webhostapp.com/al/img/product_01.png" alt="Sunset in the mountains" />
                <div className="px-6 pt-4">
                  <div className="font-bold text-xl mb-2">California Almonds</div>
                  <p className="text-dark m-0 text-base">All the way from California. Amazing quality products. Have one and order for life.</p>
                </div>
                <div className="px-6">
                  <span className="d-inline-block bg-secondary rounded  px-3 py-1 text-sm text-light m-2">#photography</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#travel</span>
                  <span className="d-inline-block bg-secondary rounded px-3 py-1 text-sm text-light m-2">#winter</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Shopbycategory;
