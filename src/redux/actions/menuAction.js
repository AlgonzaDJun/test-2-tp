import axios from "axios";

export const getMenuRequest = () => {
  return {
    type: "GET_MENU_REQUEST",
  };
};

export const getMenuSuccess = (data) => {
  return {
    type: "GET_MENU_SUCCESS",
    payload: data,
  };
};

export const getMenuFail = (data) => {
  return {
    type: "GET_MENU_FAIL",
    payload: data,
  };
};

export const getMenu = () => {
  return async (dispatch) => {
    dispatch(getMenuRequest());

    try {
      const menu = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/menu`,
        {
          show_all: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const result = menu.data.result;
      dispatch(getMenuSuccess(result));
    } catch (error) {
      dispatch(getMenuFail(error));
    }
  };
};
