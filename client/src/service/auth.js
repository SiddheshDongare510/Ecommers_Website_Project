
import ForgotPassword from './../pages/Auth/ForgotPassword';
const  auth_base = "http://localhost:8080/api/v1/auth";

export const authEndPoints = {
    register: auth_base + "/register",
    login: auth_base + "/login",
    forgotPassword: auth_base + "/forgot-password",
}
