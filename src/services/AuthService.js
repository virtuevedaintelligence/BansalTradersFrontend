
class AuthService {
export const goLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
}

export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (data == null) {
        return false;
    } else {
        return true;
    }
}

export const doLogout = (data, next) => {
    localStorage.removeItem("data");
}

export const getToken = () => {
    if (isLoggedIn) {
        return JSON.parse(localStorage.getItem("data"));
    } else {
        return false;
    }
}
}