import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";
import menuReducer from "./reducers/menuReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    menu: menuReducer
  },
});

export default store;
