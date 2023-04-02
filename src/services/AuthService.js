
export class AuthService {
    goLogin = (data) => {
        debugger;
        localStorage.setItem("data", JSON.stringify(data));
    };

    isLoggedIn = () => {
        let data = localStorage.getItem("data");
        if (data == null) {
            return false;
        } else {
            return true;
        }
    };

    doLogout = (data, next) => {
        localStorage.removeItem("data");
    };

    getToken = () => {
        if (this.isLoggedIn()) {
            return JSON.parse(localStorage.getItem("data"));
        } else {
            return false;
        }
    };
}