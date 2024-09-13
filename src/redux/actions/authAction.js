import axios from "axios";

export const loginRequest = (data) => {
  return {
    type: "LOGIN_REQUEST",
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const loginFail = (data) => {
  return {
    type: "LOGIN_FAIL",
    payload: data,
  };
};

export const userLogin = (data) => {
  return async (dispatch) => {
    dispatch(loginRequest(data));

    try {
      const auth = await axios.post(
        `${import.meta.env.VITE_API_URL}/oauth/token`,
        data
      );
      const result = auth.data;
      dispatch(loginSuccess(result));
    } catch (error) {
      dispatch(loginFail(error));
    }
  };
};
