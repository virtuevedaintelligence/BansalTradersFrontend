import axios from "axios";

const ORDER_API_BASE_URL = "http://localhost:8082/v1/orders";

class OrderService {

  createOrder(orderRequest) {
    return axios.post(ORDER_API_BASE_URL + "/placeOrder", orderRequest);
  }

}

export default new OrderService();
