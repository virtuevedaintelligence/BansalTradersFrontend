import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import "./products.css";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MdDelete } from "react-icons/md";
import FormatPrice from "../../helper/formatprice/FormatPrice";
import { useProductContext } from "../../context/productcontext";
import Quantity from "../../helper/quantity/QuantityHelper";
import AddToWishlist from "./AddToWishlist";
import { useDispatch, useSelector } from "react-redux";
import UpdateProduct from "./UpdateProduct";
import Preloader from "../preloader/Preloader";
import { add } from "../../store/slices/CartSlice";
import { FiHelpCircle } from "react-icons/fi";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
function Product({ product }) {
  const dispatch = useDispatch();
  const { isDeleteProductLoading, deleteProductCall, singleProduct } = useProductContext();
  const [selectedOption, setSelectedOption] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);

  const { isProducFavLoading, productfav, favoriteProduct } = useProductContext();

  var [actualPrice, setActualPrice] = useState();
  function calculateActualPrice(productPrice) {
    actualPrice = productPrice + 200;
    setActualPrice(actualPrice);
  }
  let { productId, productName, productImageUrl, productDescription, productPrice, orderQty, quantity, weight, categoryName, featured, ratingResponse, productInformation, isFavorite } = product;
  let changedWeight;
  const handleChange = (e) => {
    const value = e.target.value;
    changedWeight = value;
    setSelectedOption(value);
  };

  const [productInfo, setProductInfo] = useState({
    productPrice: "",
    quantity: "",
    weight: "",
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
  if (isProducFavLoading) {
    return <Preloader />;
  }
  const handleAdd = (product) => {
    product.orderQty = orderQuantity;
    product.weight = productInfo.weight;
    product.productInformation.productPrice = productInfo.productPrice;
    product.productInformation.quantity = productInfo.quantity;
    product.productInformation.weight = productInfo.weight;
    console.log(product);
    dispatch(add(product));
  };

  function displayProductDetails() {
    return productInformation.map((productInfo, i) => {
      if (selectedOption == productInfo.weight) {
        return (
          <>
            <div className="row py-2" key={i}>
              <div className="col-sm-4 col-12">
                <Quantity productInfo={productInfo} orderQuantity={orderQuantity} setOrderQuantity={setOrderQuantity} />
              </div>
              <div className="col-6 col-sm-4 p-0 text-center text-muted mb-1 productQty  m-0">
                In Stock: <span className="fw-bold">{productInfo.quantity} packets</span>
              </div>
              <div className="col-6 col-sm-4 p-0 text-center text-muted mb-1">
                Weight: <span className="fw-bold">{productInfo.weight} gms</span>
              </div>
              <div className="col-12">
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
            <p className="text-muted mb-4 productDiscCost  m-0">
              ₹<span className="fw-bold">{productInfo.productPrice}</span> |{" "}
              <s>
                ₹<span className="fw-bold">{productInfo.productMaxRetailPrice}</span>
              </s>
            </p>
          </>
        );
      }
    });
  }

  return (
    <>
      <MDBCol sm="12" md="6" lg="4" className="mb-4 products" key={productId}>
        <MDBCard>
          <div className="d-flex justify-content-between p-3">
            <p className="lead mb-0">{productName}</p>
            <div className="justify-content-between">
              <UpdateProduct product={product} />
              <button className="btn-sm btn btn-danger">
                <MdDelete onClick={deleteProd} />
              </button>
            </div>
            <AddToWishlist isFavorite={isFavorite} productId={productId} />
          </div>
          <NavLink to={`/dryfruitdetails/${productId}`}>
            <MDBCardImage src={productImageUrl} position="top" alt={productName} />
          </NavLink>
          <MDBCardBody className="mt-2">
            <div className="d-flex justify-content-between">
              <p className="small mb-2">
                <a href="#!" className="text-muted">
                  {categoryName}
                </a>{" "}
                <OverlayTrigger placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Please select weight to buy product</Tooltip>}>
                  <span variant="secondary">
                    <FiHelpCircle />
                  </span>
                </OverlayTrigger>
              </p>
              <div className="col-md-4">
                <Form.Select name="weight" aria-label="Default select example" size="sm" onChange={(e) => handleChange(e)}>
                  <option disabled selected>
                    Select Weight
                  </option>
                  {productInformation.map((productInfo) => {
                    return <option value={productInfo.weight}> {productInfo.weight} GM</option>;
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="mb-0 productDesc">{productDescription}</h6>
            </div>
            <div className="row">
              <div className="col-sm-12 col-12">{displayProductDetails()}</div>
              <div className="col-md-12 col-12">
                <NavLink className="btn btn-warning btn-sm mb-0" to={`/dryfruitdetails/${productId}`}>
                  View Product
                </NavLink>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}

export default Product;
