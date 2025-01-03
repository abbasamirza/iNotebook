import "../styles/css/Form.css";
import React, { useContext, useEffect } from "react";
import Brand from "./Brand";
import Footer from "./Footer";
import AuthContext from "../context/authentication/authContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

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
  }, [navigate]);

  return (
    <>
      <header>
        <Brand />
      </header>
      <main className="main-height">
        <form onSubmit={handleLoginSubmit}>
          <div className="container-main-form">
            <Card
              style={{ width: "40%", height: "max-content", padding: "3rem" }}
            >
              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                  autoComplete="username"
                />
              </div>
              <div>
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <button
                className="btn"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Login
              </button>
            </Card>
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
