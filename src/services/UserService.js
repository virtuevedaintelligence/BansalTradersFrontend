import axios from "axios";

const USERS_API_BASE_URL_ = "http://localhost:8082/v1/users/";
class UserService {
    generateOtp(user) {
        console.log(user);
        return axios.post(USERS_API_BASE_URL_ + "generateOTP", user);
    }

    verifyOtp(user) {
        return axios.post(USERS_API_BASE_URL_ + "verifyOTP", user);
    }

    registerAdmin(adminReg) {
        return axios.post(USERS_API_BASE_URL_ + "register", adminReg);
    }

    loginAdmin(adminLog) {
        return axios.post(USERS_API_BASE_URL_ + "login", adminLog);
    }
}

export default new UserService();
