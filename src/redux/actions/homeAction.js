import axios from "axios";

export const getDataRequest = () => {
  return {
    type: "GET_DATA_REQUEST",
  };
};

export const getDataSuccess = (data) => {
  return {
    type: "GET_DATA_SUCCESS",
    payload: data,
  };
};

export const getDataFail = (data) => {
  return {
    type: "GET_DATA_FAIL",
    payload: data,
  };
};

export const getData = () => {
  return async (dispatch) => {
    dispatch(getDataRequest());

    try {
      const home = await axios.get(`${import.meta.env.VITE_API_URL}/api/home`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      dispatch(getDataSuccess(home.data));
    } catch (error) {
      dispatch(getDataFail(error));
    }
  };
};
