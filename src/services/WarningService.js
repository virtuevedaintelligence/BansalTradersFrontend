import axios from "axios";

const WARNING_API_BASE_URL = "http://localhost:8082/v1/bansaltraders";

class WarningService {

    generateWarning() {
        return axios.get(WARNING_API_BASE_URL + "/warning");
    }

}

export default new WarningService();
