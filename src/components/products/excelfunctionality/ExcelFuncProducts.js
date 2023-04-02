import { useState } from "react";
import { AiFillFileExcel } from "react-icons/ai";
import { Button, Form, Modal, Row } from "react-bootstrap";
import * as XLSX from "xlsx";
import { FaProductHunt } from "react-icons/fa";
import { useProductContext } from "../../../context/productcontext";
import { useNavigate } from "react-router-dom";

function ExcelFunc() {
  const navigate = useNavigate();
  const { isImportProductLoading, importProductCall } = useProductContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProduct] = useState({});
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setProduct('{"productRequests": ' + JSON.stringify(d) + "}");
    });
  };
  const saveProducts = () => {
    importProductCall(products);
    handleClose();
  };
  return (
    <div>
      <button className="btn btn-primary btn-sm" style={{ marginRight: "10px" }} onClick={handleShow}>
        <FaProductHunt />
      </button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Excel to add products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
          <button className="me-4 btn btn-success btn-sm" onClick={saveProducts}>
            <AiFillFileExcel />
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExcelFunc;
