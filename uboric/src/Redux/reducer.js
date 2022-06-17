import { LOGIN_SUCCESS } from "./action";
let initialState = {
  login: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: true,
      };
    }
    default:
      return state;
  }
};
