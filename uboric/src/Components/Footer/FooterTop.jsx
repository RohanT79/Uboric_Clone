import React from "react";
import Styled from "../Navbar/Styled.module.css";

const FooterTop = () => {
  return (
    <div>
      <div id={Styled.footertop}>
        <div>
          <h2>What Our Customer Says</h2>
        </div>
        <div id={Styled.ftin}>
          <div id={Styled.txtf}>
            <br />
            <br />
            Auspicious range of foot wares. Premium branded products. Good
            service and delivery duration. Super high value of customer. <br />
            <br />
            <br />
            <p>Tushar Pandya</p>
            ⭐⭐⭐⭐⭐-Customer
          </div>
          <div id={Styled.txtf}>
            <br />
            <br />
            Very big range of products and the services are very fast. I ordered
            footwear and they delivered very quick.
            <br />
            <br />
            <br />
            <br />
            <p>Ishan Shah</p>
            ⭐⭐⭐⭐-Customer
          </div>
          <div id={Styled.txtf}>
            <br />
            <br />
            I think one of the best app for the shoes shopping.I am totally
            happy with it. Thank you so much uboric.
            <br />
            <br />
            <br />
            <br />
            <p>Harshal Patel</p>
            ⭐⭐⭐⭐ -Customer
          </div>
        </div>
        <div>
          <button id={Styled.bttn}>Add Your Review</button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
