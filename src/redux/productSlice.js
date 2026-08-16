import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getProducts from "../services/productService";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const products = await getProducts();

        return products;
    }
);

const productSlice = createSlice({

    name: "products",

    initialState: { products: [], loading: false, error: "" },

    reducers: {},

 extraReducers: (builder) => {
    builder
        .addCase(
            fetchProducts.pending,
            (state) => {
                state.loading = true;
                state.error = "";
            }
        )

        .addCase(
            fetchProducts.fulfilled,
            (state, action) => {
                state.loading = false;
                state.products = action.payload;
            }
        )

        .addCase(
            fetchProducts.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
        );
},
});

export default productSlice.reducer;