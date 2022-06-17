import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import Menubar from "./Menubar";
import Styled from "./Styled.module.css";
import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Navimg = styled.img`
  height: 90px;
  width: 200px;
  cursor: pointer;
  
`;

const Navinput = styled.input`
  background-image: radial-gradient(ellipse at center, #fff, #fff);
  border: 1px solid #000 ;
  border-radius: 3px;
  box-shadow: 1px 0 6px -3px #b5b5b5 inset;
  width: 380px;
  padding: 6px;
`;

const Navbar = () => {
  return (
    <div>
      <NavBarStyled style={{ padding: "10px" }}>
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex" }}>
            <Navinput type="text" placeholder="Search here..." style={{height:"20px"}} />
           
              <FaSearch
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  backgroundColor: "rgb(66,66,66)",
                  color: "white",
                  cursor: "pointer",
                  height:"22px",
                  width:"25px",
                }}
              />
           
          </div>
        </div>
        <div style={{ marginLeft: "-460px", cursor: "pointer" }}>
          <Link to="/" >
            <Navimg
              src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg
"
              alt="Rohan"
            />
          </Link>
        </div>
        <div>
          <div
            style={{
              marginLeft: "-150px",
              gap: "20px",
              display: "flex",
              padding: "10px",
              color: "rgb(30,81,108)",
            }}
          >
            <Link to="/loginmain" style={{ color: "rgb(30,81,108)" }}>
              {/* <Cart/> */}
              <MdAccountCircle
                id={Styled.navdiv}
                style={{
                  height: "60px",
                  width: "35px",
                  marginLeft: "-30px",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link to="/cart">
            <FaCartPlus
              id={Styled.navdiv}
              style={{ height: "60px", width: "35px", cursor: "pointer" }}
            />
            </Link>
          </div>
        </div>
      </NavBarStyled>
      <div>
        <Menubar />
      </div>
    </div>
  );
};

export default Navbar;
