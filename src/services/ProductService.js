import axios from "axios";
import { useSelector } from "react-redux";

const PRODUCTS_API_BASE_URL = "http://localhost:8082/v1/products";

class ProductService {
  saveProduct(product, token) {
    console.log("product in service", product);
    return axios.post(PRODUCTS_API_BASE_URL + "/createProduct", product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    });
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

  deleteProduct(id, token) {
    return axios.delete(PRODUCTS_API_BASE_URL + "/delete/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    });
  }

  updateProduct(id, product, token) {
    console.log("Token" + token);
    console.log("product" + product);
    console.log("id" + id);

    return axios.put(PRODUCTS_API_BASE_URL + "/updateProduct/" + id, product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    });
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

  saveProducts(products, token) {
    console.log(products);
    console.log(token);
    return axios.post(PRODUCTS_API_BASE_URL + "/importProducts", products, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    });
  }
}

export default new ProductService();
