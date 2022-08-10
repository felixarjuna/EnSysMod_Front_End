import React, { useState } from "react";
import Logo from "../assets/fhaachenlogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessPage from "./Authentication/SuccessPage";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const token = "";

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = `username=${user.username}&password=${user.password}`;
    axios
      .post("http://localhost:8080/auth/login", data, {
        headers,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert(err.response.statusText);
        }
      });
  }

  return (
    <>
      {success ? (
        <SuccessPage params={"login"} />
      ) : (
        <div className="text-center signup-container">
          <form action="" className="form-signin">
            <img className="mb-4" src={Logo} alt="" width="60" />
            <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
            <input
              name="username"
              type="username"
              id="inputUsername"
              className="form-control top"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
              autoFocus
            />
            <input
              name="password"
              type="password"
              id="inputPassword"
              className="form-control bottom"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleClick}
              >
                Submit
              </button>
              <span className="spacy"> or </span>
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
            <p className="mt-5 mb-3 text-muted">&copy;2022 Nowum Institut</p>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
