import axios from "axios";

const PRODUCTS_API_BASE_URL = "http://localhost:8082/v1/products";

class ProductService {
  saveProduct(product) {
    return axios.post(PRODUCTS_API_BASE_URL, product);
  }

  getProducts() {
    return axios.get(PRODUCTS_API_BASE_URL);
  }

  getProductById(id) {
    return axios.get(PRODUCTS_API_BASE_URL + "/productDetail/" + id);
  }

  deleteProduct(id) {
    return axios.delete(PRODUCTS_API_BASE_URL + "/" + id);
  }

  updateProducts(product, id) {
    return axios.put(PRODUCTS_API_BASE_URL + "/" + id, product);
  }
}

export default new ProductService();
