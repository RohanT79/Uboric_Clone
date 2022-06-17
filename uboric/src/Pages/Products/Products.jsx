import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterComponents from "./FilterComponents";
import { fetchData } from "../../Redux/App/action";

import "./Paginate.css";
import ReactPaginate from "react-paginate";
import { Link } from "@mui/material";
const Products = () => {
  const products = useSelector((store) => store.isApp.products);

  const handleClick = async (item) => {
    let res = await fetch("http://localhost:8080/cartData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    });
  };

  const [pageNo, setPageNo] = useState(0);
  const UserPerPage = 10;
  const pageVisited = UserPerPage * pageNo;
  const displayProducts = products
    .slice(pageVisited, pageVisited + UserPerPage)
    .map((item, id) => {
      return (
        <>
          <div id="data">
            <div id="imgdiv">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "10px",
                  marginTop: "50px",
                }}
              >
                <img src={item.img} alt="" />
              </div>

              <hr />
              <p id="p1">{item.Name}</p>
              <p id="p2" style={{ fontSize: "20px" }}>
                MRP Rs. {item.price}
              </p>
            </div>

            <div>
              {" "}
              <button
                className="btn"
                style={{
                  backgroundColor: "#1F4690",
                  border: "1px solid black",
                  width: "150px",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => handleClick(item)}
              >
                Add To Cart
              </button>
            </div>

            <div></div>
          </div>
        </>
      );
    });
  const pageCount = Math.ceil(products.length / UserPerPage);

  const ChangePage = ({ selected }) => {
    setPageNo(selected);
  };

  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, products?.length]);
  console.log(products);

  return (
    <>
      <Text
        fontSize="2xl"
        style={{ marginTop: "120px", marginLeft: "50px" }}
        color="black"
      >
        Showing results for "Men's Clothing"
      </Text>

      <Box display={{ md: "flex" }}>
        <Box>
          <FilterComponents />
        </Box>
        <Box mt="10px">
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="Wrap" justifyContent="space-around">
            {displayProducts}
          </Flex>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={ChangePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevousBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"PaginationActive"}
          />
        </Box>
      </Box>
    </>
  );
};

export default Products;
