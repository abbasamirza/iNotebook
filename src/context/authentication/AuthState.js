import { useContext } from "react";
import AuthContext from "./authContext";
import ApiContext from "../apiKey/apiContext";

const AuthState = (props) => {
  const host = useContext(ApiContext);

  // LOGIN Functionality
  const checkLoginCredentials = async (email, password) => {
    try {
      // Hit Login API
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  };

  // SIGNUP Functionality
  const createUser = async (name, email, password) => {
    try {
      // Hit Create a new user API
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ checkLoginCredentials, createUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
