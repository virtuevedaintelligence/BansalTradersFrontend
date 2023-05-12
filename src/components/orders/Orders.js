import React from "react";
import { NavLink } from "react-router-dom";
import { GrView } from "react-icons/gr";
import Order from "./Order";

function Orders() {
  return (
    <>
      <div className="container">
        <div className="col-12 text-center py-5">
          <h1>Order History</h1>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
          {/* one order start */}
          <div class="col">
            <div class="order-history-card card ">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/01.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/09.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Vegetable Mixups</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$05.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/10.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Burger</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">05.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$20.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-01">
                    <NavLink class="btn btn-icon btn-outline-success btn-sm" to="/order">
                      View Order
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          {/* one order end */}
        </div>
      </div>
    </>
  );
}

export default Orders;
