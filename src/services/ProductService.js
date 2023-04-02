import axios from "axios";
import { useSelector } from "react-redux";

const PRODUCTS_API_BASE_URL = "http://localhost:8082/v1/products";

class ProductService {

  saveProduct(product, token) {
    console.log(product);
    console.log(token);
    return axios.post(PRODUCTS_API_BASE_URL + "/createProduct", product, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    );
  }

  getProducts(userId) {
    if (userId == null) {
      return axios.get(PRODUCTS_API_BASE_URL + "/getAllProducts");
    } else {
      return axios.get(PRODUCTS_API_BASE_URL + "/getAllProducts" + `?userId=${userId}`);
    }
  }

  getProductById(id) {
    return axios.get(PRODUCTS_API_BASE_URL + "/productDetail/" + id);
  }

  deleteProduct(id) {
    return axios.delete(PRODUCTS_API_BASE_URL + "/delete/" + id);
  }

  updateProduct(id, product) {
    return axios.put(PRODUCTS_API_BASE_URL + "/updateProduct/" + id, product);
  }

  getProductReviews(id) {
    return axios.get(PRODUCTS_API_BASE_URL + "/productRating/" + id);
  }

  favoriteProduct(productId, userId) {
    return axios.get(PRODUCTS_API_BASE_URL + "/favorite/" + productId + "/" + userId);
  }
  unFavoriteProduct(productId, userId) {
    return axios.get(PRODUCTS_API_BASE_URL + "/unfavorite/" + productId + "/" + userId);
  }

  saveProducts(products) {
    return axios.post(PRODUCTS_API_BASE_URL + "/importProducts", products, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }
}

export default new ProductService();
