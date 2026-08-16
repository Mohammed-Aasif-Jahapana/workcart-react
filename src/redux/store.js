import { configureStore } from "@reduxjs/toolkit";
import myauthreducer from "./authSlice";

import productReducer from "./productSlice";

export const mystore = configureStore({
  reducer: {
    auth: myauthreducer,
    products: productReducer,
  }
});