import { Box, Checkbox, CheckboxGroup, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../Redux/App/action";

const FilterComponents = () => {
  const [searchParams, setSerachParams] = useSearchParams();

  let dispatch = useDispatch();
  console.log(searchParams.getAll("size"));
  const [CategoryValues, setCategoryValues] = useState(
    searchParams.getAll("size") || []
  );

  const CategoryHandler = (values) => {
    console.log(values);
    setCategoryValues(values);
  };

  useEffect(() => {
    if (CategoryValues) {
      setSerachParams({ size: CategoryValues }, { replace: true });

      let params = {
        size: searchParams.getAll("size"),
      };

      dispatch(fetchData(params));
    }
  }, [CategoryValues, setSerachParams, searchParams, dispatch]);

  return (
    <>
      <Box mt="140px" pr="100px">
        <Box ml={{ md: "40px" }}>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={CategoryValues}
            onChange={CategoryHandler}
          >
            <VStack alignItems={"baseline"}>
              <Checkbox
                value="small"
                style={{ padding: "5px", color: "black" }}
              >
                Small
              </Checkbox>

              <Checkbox
                value="medium"
                style={{ padding: "5px", color: "black" }}
              >
                medium
              </Checkbox>
              <Checkbox
                value="large"
                style={{ padding: "5px", color: "black" }}
              >
                Large
              </Checkbox>
              <Checkbox value="300+" style={{ padding: "5px", color: "black" }}>
                Price 300+
              </Checkbox>
            </VStack>
          </CheckboxGroup>

          <CheckboxGroup
            colorScheme="green"
            defaultValue={CategoryValues}
            onChange={CategoryHandler}
          >
            <VStack
              spacing={[1, 5]}
              direction={["column", "row"]}
              alignItems={"baseline"}
            >
              <Checkbox
                value="t shirts"
                style={{ padding: "5px", color: "black" }}
              >
                All T-shirts
              </Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>
      </Box>
    </>
  );
};

export default FilterComponents;
