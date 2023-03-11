import React from "react";
import "./orders.css";

function OrderDetails() {
  return (
    <>
      <div className="col-sm-12 text-center my-4">
        <h1>Order Details</h1>

        <div className="col-sm-6">
          <p>
            <b>Bill To:</b> Ashutosh Kolambkar
          </p>
          <p>
            <b>Address:</b> Dadar, Mumbai - 400028
          </p>
        </div>
        <div className="col-sm-6 ">
          <p className="order-right-topcontent">
            <b>Order ID:</b> 1001
          </p>
          <p className="order-right-topcontent">
            <b>Email Address:</b> kolambkarashutosh@gmail.com
          </p>
          <p className="order-right-topcontent">
            <b>Order Status:</b> Out for Delivery
          </p>
        </div>
        <div className="col-sm-12"></div>
        <table className="table table-bordered table-hover " id="">
          <thead>
            <tr className="bg-primary text-white">
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kaju</td>
              <td>400</td>
              <td>3</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>Almonds</td>
              <td>600</td>
              <td>3</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Kaju</td>
              <td>400</td>
              <td>3</td>
              <td>1200</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>Total</th>
              <th colSpan={1}>9</th>
              <th colSpan={1}>4200</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default OrderDetails;
