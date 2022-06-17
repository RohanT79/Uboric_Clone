import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import "./category.css";

const Catediv = styled.div`
  borderbottom: 1px solid #808099;
  height: 20px;
  padding: 20px;
`;
const Para = styled.p`
  color: #808080;
  margin-top: 20px;
`;

const Category = () => {
  return (
    <div>
      <div id="main"
        style={{
          height: "425px",
          width: "60%",
          display: "flex",
          margin: "auto",
          border: "1px solid black",
          marginLeft:"330px",
          display:"none"
          
        }}

        >
        <div id="indiv"
          style={{
              width: "21%",
              cursor: "pointer",
              marginTop: "0px",
              borderBottom: "1px solid black",
              fontWeight: "500",
              textAlign: "center",
              display:"block"
            }}
            >
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Fashion
            <IoMdArrowDropright
              style={{
                  marginLeft: "100px",
                marginTop: "-100px",
                padding: "20px",
                color: "#808080",
              }}
            />
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Kitchen
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Accessories
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Health & Personal Care
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Electronics
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Electric Appliances
          </Catediv>
          <Catediv style={{ borderBottom: "1px solid ", cursor: "pointer" }}>
            Paintings
          </Catediv>
        </div>

        <div style={{ display: "flex", border: "1px solid red" }}>
          <div
            style={{
              fontWeight: "bold",
              padding: "30px",
              border: "1px solid red",
              
              textAlign: "left",
            }}
          >
            Foot Wear
            <p>Men's footwear</p>
            <p>Casual Chappels/Slippers</p>
            <p>Casual Sandels</p>
            <p>Casual Party Shoes</p>
            <p>Chappels/Slippers</p>
            <p>Crocs</p>
            <p>Flip Flops</p>
            <p>Loafers</p>
            <p>Sneakers</p>
            <p>Sport's Shoes</p>
            </div>

            <div style={{
              fontWeight: "bold",
              padding: "30px",
              border: "1px solid red",
              marginLeft:"150px",
              textAlign: "left",
            }}>
            <b
              style={{ fontWeight: "700", padding: "30px", textAlign: "left" }}
            >
              Clothing
              <div style={{ marginTop: "10px", color: "#808080" }}>
               <a href="/"> Men's Clothing</a>
              </div>
              <div style={{ marginTop: "10px", color: "#808080" }}>
                Women's Clothing
              </div>

            </b>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
