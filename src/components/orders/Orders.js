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
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/02.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/11.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Pasta</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$15.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/11.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Mexican Burger</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$45.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$50.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-02">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-02" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-02" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/03.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/09.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Vegetable Mixups</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$05.70</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/10.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Mexican Burger</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$75.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$60.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-03">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-03" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-03" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/04.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/12.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Noodles</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$75.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/13.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Pizza</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$55.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$40.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-04">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-04" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-04" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/05.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/15.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Veg Crispy</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$45.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/16.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Salad</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$15.30</h6>
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
                  <div class="d-flex align-items-center" id="action-05">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-05" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-05" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/06.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/17.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Mix Veggie Pizza</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$55.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/18.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Veg Soup</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$55.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$10.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-06">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-06" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-06" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/07.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/19.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Chilly Garlic</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$45.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/20.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Paneer Pizza</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$55.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$10.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-07">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-07" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-07" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="col">
            <div class="card order-history-card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-5">
                  <div class="">
                    <h6 class="heading-title mb-2">Order #309</h6>
                    <p class="mb-0">23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/08.png" class="img-fluid rounded-pill avatar-50" alt="" />
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/21.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4 order-history">
                    <h6 class="mb-2 heading-title fw-bolder">Spring Roll</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$05.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                    <hr class="my-4" />
                  </div>
                </div>
                <div class="d-flex">
                  <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/order-history/22.png" class="rounded-pill avatar-60" alt="" />
                  <div class="ms-4">
                    <h6 class="mb-2 heading-title fw-bolder">Nachos</h6>
                    <p>Vegetable Fritters with Egg</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <h6 class="heading-title fw-bolder">$05.30</h6>
                      <h6 class="heading-title fw-bolder">Qty : 1</h6>
                    </div>
                  </div>
                </div>
                <hr className="secProd" />
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <p class="mb-0">X2 items</p>
                    <h6 class="heading-title fw-bolder">$10.60</h6>
                  </div>
                  <div class="d-flex align-items-center" id="action-08">
                    <button class="btn btn-icon btn-outline-success ctc-button" data-action="click" data-closest="#action-08" data-status="complete">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Completed</span>
                      </span>
                    </button>
                    <button class="btn btn-icon btn-outline-danger ctc-button ms-3" data-action="click" data-closest="#action-08" data-status="reject">
                      <span class="btn-inner d-flex align-items-center">
                        <span>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </span>
                        <span class="status pe-2">Rejected</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
