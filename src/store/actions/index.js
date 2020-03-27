import axios from "axios";
import * as types from "../types";

export const inputAction = e => {
  const { name, value } = e.target;
  return {
    type: types.INPUT,
    name,
    value
  };
};

export const loginAction = item => {
  return {
    type: types.LOGIN,
    payload: item
  };
};

export const loadingAction = () => {
  return {
    type: types.LOADING
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT
  };
};

export const getListAction = action => {
  return {
    type: types.GET_LIST,
    payload: action
  };
};

export const sortNameAction = () => {
  return {
    type: types.SORT_NAME
  };
};

export const sortDistanceAction = () => {
  return {
    type: types.SORT_DISTANCE
  };
};

// Thunk action creators:
export function loginThunkAction(inputData) {
  // Validate user input fields
  const errors = {};
  if (!inputData.username) errors.username = "Missing username";
  if (!inputData.password) errors.password = "Missing password";
  if (Object.keys(errors).length) {
    return {
      type: types.LOGIN_ERROR,
      errors
    };
  }
  return async (dispatch, getState) => {
    // Show loading spinner right away
    dispatch(loadingAction());
    const { username, password } = getState().loginReducer;
    const url = "http://playground.tesonet.lt/v1/tokens";
    try {
      const response = await axios.post(url, { username, password });
      dispatch(loginAction(response));
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: types.LOGIN_ERROR,
        errors: {
          server:
            "Invalid credentials or Network error. Remember, you have to allow insecure content in your browser"
        }
      });
    }
  };
}

export function getListThunkAction() {
  return async (dispatch, getState) => {
    try {
      const url = "http://playground.tesonet.lt/v1/servers";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getState().loginReducer.token}`
        }
      });
      dispatch(getListAction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
