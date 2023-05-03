import axios from "axios";
import { AuthService } from "./AuthService";

const CATEGORY_API_BASE_URL = "http://localhost:8082/v1/categories";
const authService = new AuthService();

class CategoryService {
  saveCategory(category, token) {
    return axios.post(CATEGORY_API_BASE_URL + "/createCategory", category, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        Cookie: "JSESSIONID=7324D07B01008E7B08C077211722C45B",
      },
    });
  }

  getCategories() {
    return axios.get(CATEGORY_API_BASE_URL + "/getAllCategories");
  }

  deleteCategory(id, token) {
    return axios.delete(CATEGORY_API_BASE_URL + "/delete/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        Cookie: "JSESSIONID=7324D07B01008E7B08C077211722C45B",
      },
    });
  }

  updateCategory(category, id, token) {
    console.log(token);
    return axios.put(CATEGORY_API_BASE_URL + "/updateCategory/" + id, category, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        Cookie: "JSESSIONID=7324D07B01008E7B08C077211722C45B",
      },
    });
  }

  saveCategories(categories, token) {
    return axios.post(CATEGORY_API_BASE_URL + "/importCategories", categories, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    });
  }
}

export default new CategoryService();
