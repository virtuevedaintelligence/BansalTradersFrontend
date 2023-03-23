import axios from "axios";

const CATEGORY_API_BASE_URL = "http://localhost:8082/v1/categories";

class CategoryService {
  saveCategory(category) {
    console.log(category);
    return axios.post(CATEGORY_API_BASE_URL + "/createCategory", category);
  }

  getCategories() {
    return axios.get(CATEGORY_API_BASE_URL + "/getAllCategories");
  }

  deleteCategory(id) {
    return axios.delete(CATEGORY_API_BASE_URL + "/delete/" + id);
  }

  updateCategory(category, id) {
    return axios.put(CATEGORY_API_BASE_URL + "/updateCategory/" + id, category);
  }

  saveCategories(categories) {
    return axios.post(CATEGORY_API_BASE_URL + "/importCategories", categories, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
  }
}

export default new CategoryService();
