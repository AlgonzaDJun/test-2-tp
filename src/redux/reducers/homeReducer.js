const initialState = {
  data_diri: null,
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        data_diri: action.payload,
        loading: false,
      };
    case "GET_DATA_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;