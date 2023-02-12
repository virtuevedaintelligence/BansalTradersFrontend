import axios from "axios";

const USERS_API_BASE_URL_ = "http://localhost:8082/v1/users/";
class UserService {
    generateOtp(user) {
        return axios.post(USERS_API_BASE_URL_ + "generateOTP", user);
    }

    verifyOtp(user) {
        return axios.post(USERS_API_BASE_URL_ + "verifyOTP", user);
    }
}

export default new UserService();
