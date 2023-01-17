import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import "./dryfruits.css";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function DryFruit({ product }) {
    var [actualPrice, setActualPrice] = useState();
    function calculateActualPrice(productPrice) {
        actualPrice = productPrice + 200;
        setActualPrice(actualPrice);
    }
    const { productId, productName, productImageUrl, productDescription, productPrice, quantity, weight, categoryName, featured } = product;

    useEffect(() => {
        calculateActualPrice(productPrice);
    }, []);

    const navigateProductDetail = useNavigate();

    const navProductDetail = (e, id) => {
        e.preventDefault();
        navigateProductDetail(``);
    }
    return (
        <>
            <MDBCol md="4" lg="4" className="mb-4 products">
                {/* <NavLink className="nav-link" to={productId}> */}
                <MDBCard key={productId}>
                    <div className="d-flex justify-content-between p-3">
                        <p className="lead mb-0">{productName}</p>
                        <div className=" rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{ width: "35px", height: "35px" }}>
                            <p className="text-white mb-0 small">
                                <FcLike />
                            </p>
                        </div>
                    </div>
                    <MDBCardImage src={productImageUrl} position="top" alt={productName} />
                    <MDBCardBody>
                        <div className="d-flex justify-content-between">
                            <p className="small mb-2">
                                <a href="#!" className="text-muted">
                                    {categoryName}
                                </a>
                            </p>
                            <div className="productDiscCost">
                                ₹{productPrice} | <s value={actualPrice}>₹{actualPrice}</s>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <h6 className="mb-0 productDesc">{productDescription}</h6>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <p className="text-muted mb-0 productQty  m-0">
                                In Stock: <span className="fw-bold">{quantity} packets</span>
                            </p>
                            <p className="text-muted mb-0">
                                Weight: <span className="fw-bold">{weight} gms</span>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Form.Select aria-label="Default select example" size="sm">
                                    <option>Select Weight</option>
                                    <option value="1">250 GM</option>
                                    <option value="2">500 GM</option>
                                    <option value="3">1000 Gm</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-4  d-flex">
                                <button className="btn btn-sm btn-primary mb-0">-</button>
                                <Form.Control size="sm" readOnly disabled type="text" className="text-center qty_cost_bg" placeholder="1" />
                                <button className="btn btn-sm btn-primary mb-0">+</button>
                            </div>
                            <div className="col-md-4">
                                <Form.Control size="sm" readOnly disabled type="text" className="qty_cost_bg" placeholder="Cost" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <button className="btn btn-primary btn-sm mb-0 add_to_cart">Add To Cart</button>
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
                {/* </NavLink> */}
            </MDBCol>
            {/* code for detail page */}
        </>
    );
}

export default DryFruit;
