import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:8082/v1/products";

class ProductService {
  saveProduct(product) {
    console.log("In Product Service")
    console.log(product) //http://localhost:8082/v1/products/createProduct 
    return axios.post(PRODUCTS_API_BASE_URL + "/createProduct", product); // http://localhost:8082/v1/products/createProduct
  }

  getProducts() {
    return axios.get(PRODUCTS_API_BASE_URL);
  }

  getProductById(id) {
    return axios.get(PRODUCTS_API_BASE_URL + "/productDetail/" + id);
  }

  deleteProduct(id) {
    return axios.delete(PRODUCTS_API_BASE_URL + "/delete/" + id);
  }

  updateProduct(product, id) {
    return axios.put(PRODUCTS_API_BASE_URL + "/updateProduct/" + id, product);
  }
}

export default new ProductService();
