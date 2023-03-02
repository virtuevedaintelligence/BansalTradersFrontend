import React from "react";
import { NavLink } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import { GrView } from "react-icons/gr";
function Order() {
  return (
    <>
      <td>1001</td>
      <td>Delivered</td>
      <td>22nd Feb 2023</td>
      <td>25th Feb 2023</td>
      <td>1000</td>
      <td>
        <NavLink className="nav-link" to="/order">
          <GrView />
        </NavLink>
      </td>

      {/* <OrderDetails /> */}
    </>
  );
}

export default Order;
