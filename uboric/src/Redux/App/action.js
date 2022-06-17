import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetch_Data_Request = (payload) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload,
  };
};
const fetch_Data_Success = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetch_Data_Failure = (payload) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetch_Data_Request());
    axios
      .get("http://localhost:8080/Tshirts", {
        params: {
          ...payload,
        },
      })
      .then((res) => dispatch(fetch_Data_Success(res.data)))
      .catch((err) => dispatch(fetch_Data_Failure(err.data)));
  };
};
