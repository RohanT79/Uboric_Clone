import React from "react";
import { useState } from "react";
import "../Checkout/Checkout.css";
import payment from "../../Img/payment.jpg";
import { Link } from "react-router-dom";

const initData = {
  firstName: "",
  lastName: "",
  companyName: "",
  contry: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  county: false,
  zip: "",
  phone: "",
  email: "",
};

const Checkout = () => {
  const [fdata, setData] = useState(initData);
  const handleChange = (e) => {
    console.log("change");
    let { name, value } = e.target;
    setData({ ...fdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    alert("Order will be placed Soon");
    try {
      console.log(e);
      let res = await fetch("http://localhost:3001", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(fdata),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="maindiv">
      <div className="checkout">
        <div className="introo">
          <h1>Checkout</h1>
          <h4>
            <a href="/">Home</a>----- Checkout{" "}
          </h4>
          <div className="coupon">
            <p>
              Have a Coupon ? <a href="">Click Here to enter your code</a>
            </p>
          </div>
        </div>
        <div className="payment">
          <form onSubmit={handleSubmit} style={{ marginLeft: "10px" }}>
            <h2>Billing details</h2>
            <label> FIRST NAME</label>
            <input
              name="firstName"
              type="text"
              id="small"
              value={fdata.firstName}
              onChange={handleChange}
              required
            />
            <label style={{ marginLeft: "50px" }}>LAST NAME</label>
            <input
              name="lastName"
              value={fdata.lastName}
              type="text"
              id="small"
              onChange={handleChange}
              required
            />
            <br />
            <label>COMPANY NAME(OPTIONAL)</label>
            <input
              name="companyName"
              value={fdata.companyName}
              type="text"
              id="long"
              onChange={handleChange}
              required
            />
            <br />
            <label>COUNTRY / REGION</label>
            <input
              name="country"
              value={fdata.country}
              type="text"
              id="small"
              onChange={handleChange}
              required
            />
            <br />
            <label>ADDRESS</label>
            <input
              name="address"
              value={fdata.address}
              type="text"
              id="small"
              onChange={handleChange}
              required
            />
            <br />
            <label>TOWN / CITY</label>
            <input
              name="city"
              value={fdata.city}
              type="text"
              id="small"
              onChange={handleChange}
              required
            />
            <label style={{ marginLeft: "50px" }}>STATE / COUNTY *</label>
            <input
              name="city"
              value={fdata.city}
              type="text"
              id="small"
              onChange={handleChange}
              required
            />
            <br />
            <label>POSTCODE / ZIP</label>
            <input
              name="zip"
              checked={fdata.zip}
              type="text"
              id="small"
              onChange={handleChange}
            />
            <label style={{ marginLeft: "50px" }}>PHONE</label>
            <input
              name="Number"
              checked={fdata.phone}
              type="number"
              id="small"
              onChange={handleChange}
            />
            <br />
            <label>ALTERNATE PHONE</label>
            <input
              name="Number"
              value={fdata.aphone}
              type="number"
              id="small"
              onChange={handleChange}
              required
            />
            <label style={{ marginLeft: "50px" }}>EMAIL ADDRESS</label>
            <input
              name="email"
              value={fdata.email}
              type="email"
              id="small"
              onChange={handleChange}
              required
            />
            <br />
            <h2>Additional information</h2>
            <textarea
              rows="6"
              cols="95"
              style={{ border: "1px solid" }}
            ></textarea>
            <br />
            <input
              className="submitBtn"
              type="submit"
              style={{
                borderRadius: "10px",
                border: "1px solid",
                backgroundColor: "orange",
              }}
            />
          </form>
        </div>
      </div>
      <div className="rightdiv">
        <div id="infomain">
          <div id="infodiv">
            <ul>
              <li> Guaranteed delivery with 100% original products</li>
              <li>COD available on some categories</li>
              <li>
                FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500
              </li>
              <li>EMI OPTION AVAILABLE</li>
              <li>TO AVAIL MORE BANK OPTIONS ON EMI PURCHASE ABOVE RS. 3000</li>
              <li>
                FREE DELIVERY ON ORDERS AVOVE 500 FOR COD & FOR ONLINE PAYMENT
                FREE DELIVERY AVAILABLE ON ALL ORDERS
              </li>
              <li>BELOW ₹500 CASH ON DELIVERY CHARGES ₹49</li>
            </ul>
          </div>
     
          <div
            style={{
              height: "500px",
              width: "400px",
              marginTop: "400px",
              marginLeft: "-80px",
            }}
          >
            {" "}
            <img
              src={payment}
              alt="img"
              style={{ height: "500px", width: "100%", marginTop: "400px" }}
            />
          </div>
          <Link to="/paysuccess">
            {" "}
            <div>
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  marginTop: "40px",
                  border: "1px solid",
                  marginLeft: "-80px",
                  backgroundColor: "orange",
                  borderRadius: "10px",
                }}
              >
                Pay
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
