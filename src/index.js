import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./context/productcontext";
import { CategoryProvider } from "./context/categorycontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </ProductProvider>
  </React.StrictMode>
);
