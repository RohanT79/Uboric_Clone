import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Styled from "../Navbar/Styled.module.css";
import { Link } from "react-router-dom";

const FooterDiv = styled.div`
  height: 400px;
  background-color: rgb(1, 1, 0);
  color: white;
  width: 100%;
  border: 1px solid rgb(1, 1, 0);
`;
const FooterImg = styled.img`
  margin: auto;
  //   border: 1px solid red;
`;

const FooterPara = styled.p`
color: rgb(254,255,214)
font-weight:400
cursor:pointer;
`;
const Fotdiv = styled.div`
  background-color: #ffcf60;
  border-radius: 50%;
  padding: 14px;
  font-size: 18px;
  color: rgb(1, 1, 0);
  width: 25px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <FooterImg
          src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png"
          alt=""
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <Link
          to="/about"
          style={{ textDecoration: "none", color: "white", refresh: "true" }}
        >
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            About Us
          </FooterPara>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Contact
          </FooterPara>
        </Link>
        <Link to="/shipping" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Shipping & Returns
          </FooterPara>
        </Link>
        <Link to="/account" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            My Account
          </FooterPara>
        </Link>
        <Link to="/privecy" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Privacy Policy
          </FooterPara>
        </Link>
        <Link to="/seller" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Become A Seller
          </FooterPara>
        </Link>
        <Link to="/terms" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <FooterPara id={Styled.divho} onClick="window.location.reload();">
            Terms & Conditions
          </FooterPara>
        </Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <FooterPara>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</FooterPara>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "13px",
          textAlign: "center",
          cursor: "pointer",
          marginTop: "40px",
        }}
      >
        <Fotdiv id={Styled.divho1}>
          <a
            href="https://www.facebook.com/Uboricllp/"
            style={{ color: "rgb(1,1,0)" }}
          >
            <FaFacebookF />
          </a>
        </Fotdiv>
        <Fotdiv id={Styled.divho1}>
          <a
            href="https://www.instagram.com/uboric_shoes/?igshid=1scv9g4eccoi5"
            style={{ color: "rgb(1,1,0)" }}
          >
            <BsInstagram />
          </a>
        </Fotdiv>
      </div>
    </FooterDiv>
  );
};

export default Footer;
