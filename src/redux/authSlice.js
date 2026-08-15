import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // isLoggedIn: false, 
    // user: null, 
    // token: null

    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token")

};

const authSlice = createSlice({
    
    name: "auth", initialState, reducers: {

        mylogin: (state, action) => {

            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);

        },

        mylogout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;

            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("cart");
        }
    }
});


export const { mylogin, mylogout } = authSlice.actions;

export default authSlice.reducer;