import React, { useContext } from "react";
import Brand from "./Brand";
import Footer from "./Footer";
import AuthContext from "../context/authentication/authContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Signup = () => {
  const authContext = useContext(AuthContext);
  const { createUser } = authContext;
  const navigate = useNavigate();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const json = await createUser(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value
    );
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/main");
    } else if (json.error[0].msg) {
      alert(json.error[0].msg);
    } else {
      alert(json.error);
    }
  };

  return (
    <>
      <header>
        <Brand />
      </header>
      <main className="main-height">
        <form onSubmit={handleSignupSubmit}>
          <div className="container-main-form">
            <Card
              style={{ width: "40%", height: "max-content", padding: "3rem" }}
            >
              <div>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  required
                />
              </div>
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
                Signup
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

export default Signup;
