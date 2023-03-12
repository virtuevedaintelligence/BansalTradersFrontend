
export class AuthService {
    goLogin = (data) => {
        console.log(data);
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
            debugger;
            return JSON.parse(localStorage.getItem("data"));
        } else {
            return false;
        }
    };
}