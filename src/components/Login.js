import React, { useContext } from "react";
import Brand from "./Brand";
import Footer from "./Footer";
import AuthContext from "../context/authentication/authContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { checkLoginCredentials } = authContext;

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    checkLoginCredentials(event.target[0].value, event.target[1].value);
  }

  return (
    <>
      <header>
        <Brand />
      </header>
      <main className="main-height">
        <form onSubmit={handleLoginSubmit}>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              autoComplete="username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              autoComplete="current-password"
            />
            <button className="btn" type="submit">Login</button>
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
