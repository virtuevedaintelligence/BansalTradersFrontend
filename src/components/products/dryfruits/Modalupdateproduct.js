import React, { useState } from "react";
import { useCategoryContext } from "../../../context/categorycontext";
import { Button, Form, Modal } from "react-bootstrap";

function Modalupdateproduct() {
  const { isLoadingCategory, categories } = useCategoryContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div>Modal Udpate product</div>;
}

export default Modalupdateproduct;
