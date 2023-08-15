import React, { useContext, useEffect } from "react";
import Brand from "./Brand";
import Footer from "./Footer";
import AuthContext from "../context/authentication/authContext";
import { useNavigate } from "react-router-dom";
import "../styles/css/Form.css";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { checkLoginCredentials } = authContext;
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const json = await checkLoginCredentials(
      event.target[0].value,
      event.target[1].value
    );
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/main");
    } else {
      alert(json.error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/main");
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <header>
        <Brand />
      </header>
      <main className="main-height">
        <form onSubmit={handleLoginSubmit}>
          <div className="container-main-form">
            <label className="label" htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              autoComplete="username"
            />
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              autoComplete="current-password"
            />
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
