import * as types from "../types";

const initialState = {
  username: "",
  password: "",
  errors: {},
  isLoggedIn: false,
  isLoading: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.INPUT:
      return { ...state, [action.name]: action.value };
    case types.LOADING:
      return { ...state, isLoading: true };
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload.data.token,
        username: "",
        password: ""
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        errors: action.errors,
        isLoading: false,
        password: "",
        username: ""
      };
    case types.LOGOUT:
      return { ...state, isLoading: false, isLoggedIn: false, errors: {} };
    default:
      return state;
  }
}

export default loginReducer;
