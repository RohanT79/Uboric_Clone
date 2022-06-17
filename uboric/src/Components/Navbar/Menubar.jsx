import React from "react";
import Styled from "./Styled.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Menu = () => {
  return (
    <div
      id={Styled.main}
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        zIndex: "-1",
        
      }}
    >
      <Link style={{ color: "black" }} to="/">
        <div onClick="window.location.reload();">Home</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/products">
        <div id={styled.category1}>
          Category
          <IoMdArrowDropdown style={{ marginBottom: "-5px" }} />
        </div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/loginmain">
        {" "}
        <div>Customer/Guest login</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/merchant">
        <div>Merchant/Bulk Order</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/seller">
        <div>Become A Seller</div>
      </Link>
    </div>
  );
};

export default Menu;
