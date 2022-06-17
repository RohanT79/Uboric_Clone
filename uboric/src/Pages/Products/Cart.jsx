import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
  const [details, setDetails] = useState([]);

  const getData = async () => {
    let res = await fetch("http://localhost:8080/cartData");
    let data = await res.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const onDelete = (id) => {
    let newTodo = details.filter((item) => item.id !== id);
    setDetails(newTodo);
  };
  console.log(details);
  const Delete = async (id) => {
    try {
      await fetch(`http://localhost:8080/cartData/${id} `, {
        method: "DELETE",
        heade$: { "content-type": "application/json" },
      });

      console.log(2);
      onDelete(id);
    } catch (e) {
      console.log(e);
    }
  };

  const [Cost, setCost] = useState(0);

  const handleCost = () => {
    let ans = 0;
    details.map((item) => (ans += item.amount * item.price));
    setCost(ans);
    console.log(Cost);
  };

  useEffect(() => {
    handleCost();
  });

  const handleChange = (item, d) => {
    const ind = details.indexOf(item);
    const arr = details;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setDetails([...arr]);
  };

  localStorage.setItem("Cost", Cost);
  return (
    <div style={{ marginTop: "200px", marginLeft: "100px" }}>
      <h3 style={{ fontWeight: "700", fontSize: "22px" }}>My Cart</h3>
      <hr />
      <div style={{ display: "flex" }}></div>

      <hr />

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          {details.map((item) => {
            return (
              <div>
                <div style={{ width: "100%" }}>
                  <div className="Cart_page">
                    {/* <hr /> */}
                    <div style={{ disaplay: "flex", width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          color: "rgb(13, 77, 104)",
                          fontSize: "18px",
                          // paddingLeft: "10px",
                          width: "90%",
                        }}
                      >
                        <div style={{ width: "80%", display: "flex" }}>
                          <div
                            style={{
                              width: "20%",
                              height: "50px",
                              marginTop: "30px",
                            }}
                          >
                            <button
                              className="remove_btn"
                              onClick={() => Delete(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                          <img
                            style={{ marginLeft: "80px", marginTop: "20px" }}
                            className="img"
                            src={item.img}
                            alt=""
                          />
                          <p style={{ marginLeft: "30px", marginTop: "20px" }}>
                            <b>Title</b>
                            <p>{item.title}</p>
                          </p>
                        </div>

                        <div className="plus" style={{ display: "flex" }}>
                          <h3 style={{ marginLeft: "30px", marginTop: "30px" }}>
                            <b style={{ fontSize: "22px", marginTop: "-10px" }}>
                              {" "}
                              MRP{" "}
                            </b>
                            <p style={{ fontSize: "20px", marginTop: "10px" }}>
                              Rs.{item.price}
                            </p>
                          </h3>
                          <b
                            style={{
                              fontSize: "20px",
                              marginTop: "10px",
                              marginLeft: "80px",
                            }}
                          >
                            Quantity
                          </b>
                          <button
                            style={{ marginLeft: "-90px", marginTop: "50px" }}
                            onClick={() => handleChange(item, 1)}
                          >
                            +
                          </button>
                          <button
                            style={{ marginLeft: "30px", marginTop: "50px" }}
                          >
                            {item.amount}
                          </button>
                          <button
                            style={{ marginLeft: "30px", marginTop: "50px" }}
                            onClick={() => handleChange(item, -1)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <hr /> */}
                  </div>
                </div>
              </div>
            );
          })}
          <h3 style={{ paddingLeft: "40px" }}>Total Cost : {Cost}</h3>
        </div>

        <div className="Right_cartPage" style={{ marginLeft: "200px" }}>
          <h3 style={{ fontSize: "21px", padding: "10px" }}>Total Amount</h3>
          <hr />
          <hr />
          <h3 style={{ paddingLeft: "40px" }}>Total Cost : {Cost}</h3>

          <p style={{ paddingLeft: "40px", color: "rgb(13, 77, 104)" }}>
            Delivary Charges : Rs.{Cost / 20}
          </p>
          <hr />

          <h3 style={{ fontSize: "22px", paddingLeft: "40px" }}>
            Amount To pay : Rs. {Math.ceil(Cost + Cost / 10 + Cost / 30)}
          </h3>
          <Link to="/checkout">
            <button
              className="payment1"
              style={{
                marginLeft: "50px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Proceed To Payment
            </button>
          </Link>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Cart;
