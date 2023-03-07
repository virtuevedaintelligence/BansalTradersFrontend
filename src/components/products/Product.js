import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import "./products.css";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MdDelete } from "react-icons/md";
import FormatPrice from "../../helper/formatprice/FormatPrice";
import { useProductContext } from "../../context/productcontext";
import Quantity from "../../helper/quantity/QuantityHelper";
import AddToWishlist from "./../AddToWishlist";
import { useDispatch, useSelector } from "react-redux";
import UpdateProduct from "./UpdateProduct";
import Preloader from "../preloader/Preloader";
import { add } from "../../store/slices/CartSlice";
function Product({ product }) {


  const dispatch = useDispatch();
  const { isDeleteProductLoading, deleteProductCall, singleProduct } = useProductContext();
  const [selectedOption, setSelectedOption] = useState("");
  const [orderQuantity, setOrderQunatity] = useState(1);

  var [actualPrice, setActualPrice] = useState();
  function calculateActualPrice(productPrice) {
    actualPrice = productPrice + 200;
    setActualPrice(actualPrice);
  }
  let { productId, productName, productImageUrl, productDescription,
    productPrice, orderQty, quantity, weight, categoryName, featured, ratingResponse, productInformation } = product;
  let changedWeight;
  const handleChange = (e) => {
    const value = e.target.value;
    changedWeight = value;
    console.log(value);
    setSelectedOption(value);
  };

  const [productInfo, setProductInfo] = useState({
    productPrice: "",
    quantity: "",
    weight: ""
  });

  useEffect(() => {
    calculateActualPrice(productPrice);
  }, []);
  const deleteProd = (e) => {
    e.preventDefault();
    deleteProductCall(productId);
  };
  if (isDeleteProductLoading) {
    return <Preloader />;
  }

  const handleAdd = (product) => {
    product.orderQty = orderQuantity;
    product.weight = changedWeight;
    dispatch(add(product));
  };

  const productDetail = () => {
    console.log(selectedOption);
    productInformation.map((productInfo, i) => {
      console.log(selectedOption);
      return (
        <div key={i}>
          <p className="text-muted mb-1 productQty  m-0">
            In Stock: <span className="fw-bold">{productInfo.quantity} packets</span>
          </p>
          <p className="text-muted mb-1">
            Weight: <span className="fw-bold">{productInfo.weight} gms</span>
          </p>
        </div>
      );
    })
  }

  return (
    <>
      <MDBCol sm="6" md="4" lg="4" className="mb-4 products" key={productId}>
        <MDBCard>
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{productName}</p>
            <div className="justify-content-between">
              <UpdateProduct product={product} />
              <button className="btn-sm btn btn-danger">
                <MdDelete onClick={deleteProd} />
              </button>
            </div>
            <AddToWishlist />
          </div>
          <NavLink to={`/dryfruitdetails/${productId}`}>
            <MDBCardImage src={productImageUrl} position="top" alt={productName} />
          </NavLink>
          <MDBCardBody>
            <div className="d-flex justify-content-between">
              <p className="small mb-2">
                <a href="#!" className="text-muted">
                  {categoryName}
                </a>
              </p>
              <div className="col-md-4">
                <Form.Select name="weight" aria-label="Default select example" size="sm"
                  onChange={(e) => handleChange(e)}>
                  {productInformation.map((productInfo) => {
                    return <option value={productInfo.weight} >{productInfo.weight} GM</option>
                  })
                  }</Form.Select>
              </div>
            </div>
            <div>
              {productDetail()}
            </div>
            <div className="d-flex justify-content-between mb-2">
              <h6 className="mb-0 productDesc">{productDescription}</h6>
            </div>
            <div className="d-flex justify-content-between mb-2">
            </div>
            <div className="row">
              <Quantity singleProduct={product} orderQuantity={orderQuantity} setOrderQunatity={setOrderQunatity} />
              <div className="col-md-6 mt-3">
                <NavLink className="btn btn-warning btn-sm mb-0" to={`/dryfruitdetails/${productId}`}>
                  View Product
                </NavLink>
              </div>
              <div className="col-md-6 mt-3">
                <button
                  className="btn btn-primary btn-sm mb-0 add_to_cart"
                  onClick={() => {
                    handleAdd(product);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}

export default Product;
