import React, { useState} from "react";
const ProductSimple = ({ image, title, price, id }) => {
  const [data, setData] = useState("");

  const handleClick = async (item) => {
    let res = await fetch("http://localhost:8080/cartData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    });
  };
  return (
    <center py={12}>
      <div
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        divShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <div
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <img
            rounded={"lg"}
            mt={10}
            height={250}
            width={262}
            objectFit={"cover"}
            src={image}
            alt="img"
          />
        </div>
        <div pt={10} align={"center"}>
          <h3 color={"gray.500"} fontSize={"sm"} h3Transform={"uppercase"}></h3>
          <h2 fontSize={"sx"} fontFamily={"body"} fontWeight={500}>
            {title}
          </h2>
          <div direction={"row"} align={"center"}>
            <h3 fontWeight={800} fontSize={"xl"}>
              ${price}
            </h3>
            <button
              onClick={() => handleClick(data)}
              style={{
                height: "30px",
                width: "210px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};
export default ProductSimple;
