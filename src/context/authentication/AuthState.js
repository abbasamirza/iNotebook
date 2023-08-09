import { useContext } from "react";
import AuthContext from "./authContext"
import ApiContext from "../apiKey/apiContext";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
    const host = useContext(ApiContext);
    const navigate = useNavigate();

    // Hit Login API
    const checkLoginCredentials = async (email, password) => {
        try {
            const response = await fetch(`${host}auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                }),
            });
            const json = await response.json();
            if (json.success) {
                localStorage.setItem("authToken", json.authToken);
                navigate("/main");
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <AuthContext.Provider value={{ checkLoginCredentials }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;