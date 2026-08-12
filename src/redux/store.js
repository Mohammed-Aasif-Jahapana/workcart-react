import { configureStore } from "@reduxjs/toolkit";
import myauthreducer from "./authSlice";

export const mystore = configureStore({
  reducer: {
    auth: myauthreducer
  }
});