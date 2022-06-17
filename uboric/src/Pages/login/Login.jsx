import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/action";

const Login = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    let field = e.target;
    if (field.type === "checkbox") {
      setLoginData({ ...loginData, [field.name]: field.checked });
    } else {
      setLoginData({ ...loginData, [field.name]: field.value });
    }
  };
  let userinfo = JSON.parse(localStorage.getItem("userinfo")) || "";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userinfo === "") {
      alert("User Not Found Please create a account");
      navigate("/signup");
    } else {
      let flag = false;
      for (let i = 0; i < userinfo.length; i++) {
        if (
          userinfo[i].email === loginData.email &&
          userinfo[i].password === loginData.password
        ) {
          flag = true;
          localStorage.setItem("loginperson", JSON.stringify(userinfo[i]));
        }
      }
      if (flag === true) {
        dispatch(loginSuccess());
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div className="signupbox">
      <div>
        <h1
          style={{
            fontWeight: "800",
            fontStyle: "italic",
            fontFamily: "sans-serif",
          }}
        >
          Sign in
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              required
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              name="email"
              className="signupinput"
            />
          </div>

          <div>
            <input
              required
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              className="signupinput"
            />
          </div>
          <div>
            <input
              required
              onChange={handleChange}
              name="signupcheck"
              type="checkbox"
              className="signupcheck"
            />{" "}
            <label>This is a public or shared device</label>
          </div>
          <div>
            <p>
              By creating an account, I agree to the{" "}
              <span id="sp1">Terms and Conditions and Privacy Statement.</span>
            </p>
          </div>
          <div>
            <input type="submit" className="signupsubmit" value="Continue" />
          </div>
        </div>
      </form>
      <div id="endsignup">
        <p id="sp1" style={{ color: "#0a438b" }}>
          Forgot Password
        </p>
      </div>
    </div>
  );
};

export default Login;
