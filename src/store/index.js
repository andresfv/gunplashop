//reducers
import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./reducers/productReducers";

const store = configureStore({
    reducer: {
        products:productReducers
    }
})
 
export default store;