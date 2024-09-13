const initialState = {
  menu: [],
  loading: false,
  error: null,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MENU_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_MENU_SUCCESS":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "GET_MENU_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
