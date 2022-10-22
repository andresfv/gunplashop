import { createSlice } from "@reduxjs/toolkit";
import { getProducts, searchHandler} from "../actions/productActions";


const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        search:searchHandler
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
        },

        [getProducts.rejected]: (state) => {
            state.loading = false;
        },

        [getProducts.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.products = payload;
        }
    }
});

export const{search} = productSlice.actions
export default productSlice.reducer;
