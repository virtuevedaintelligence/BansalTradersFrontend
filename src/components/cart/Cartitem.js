import React from "react";
import { Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { remove, increase, decrease, delItem } from "../../store/slices/CartSlice";
import "./cart.css";
function Cartitem({ id, name, category, weight, img, quantity, totalPrice, totalCartAmount,
  totalQuantity }) {
  console.log(img);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card mb-3 py-2 cartItem">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={img} className="img-fulid card-img" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body px-0 py-1">
              <FaTrash
                className="deleteCartBtn"
                onClick={() => {
                  dispatch(delItem(id));
                }}
              />
              <h5 className="card-title m-0">{name}</h5>
              <p className="text-secondary " style={{ fontSize: "12px", marginBottom: "5px" }}>
                {category} ---- {weight}
              </p>
              <div className="row">
                <div className="col-6 d-flex">
                  <div className="d-flex">
                    <button
                      className="btn btn-sm btn-success mb-0"
                      onClick={() => {
                        dispatch(increase(id));
                      }}
                    >
                      +
                    </button>
                    <Form.Control size="sm" readOnly disabled type="text"
                      className="text-center qty_cost_bg" value={quantity} />
                    <button
                      className="btn btn-sm btn-danger mb-0"
                      onClick={() => {
                        dispatch(remove(id));
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <p className="m-0">Cost: {totalPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartitem;
