import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./login.css";

const Loginmain = () => {
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid red",
        marginTop: "80px",
        width: "80%",
        margin: "auto",
      }}
    >
      <Login />
      <Signup />
    </div>
  );
};

export default Loginmain;
