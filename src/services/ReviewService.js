import axios from "axios";

const REVIEWS_API_BASE_URL = "http://localhost:8082/v1/ratings";

class ReviewService {
  saveReview(review) {
    return axios.post(REVIEWS_API_BASE_URL + "/createReview", review);
  }

  deleteReview(id) {
    return axios.delete(REVIEWS_API_BASE_URL + "/delete/" + id);
  }

  updateReview(id, review) {
    return axios.put(REVIEWS_API_BASE_URL + "/updateReview/" + id, review);
  }
}

export default new ReviewService();
