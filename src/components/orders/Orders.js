import React from "react";
import { NavLink } from "react-router-dom";
import { GrView } from "react-icons/gr";
import Order from "./Order";

function Orders() {
  return (
    <>
      <div className="container">
        <h1 className="py-2 text-center">All Orders</h1>
        <table className="table border text-center" id="">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Delivery Status</th>
              <th>Order Date</th>
              <th>Shipped Date</th>
              <th>Total Order Price</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            <Order />
            <tr>
              <Order />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
