import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductsApi from "../../api/ProductsApi";


export const getProducts = createAsyncThunk('products/getProducts', async (params) => {
    //llamada ajax

    const data = await ProductsApi.findByNameAndAvailable(params).then(json => {
        return json.data.map(({ id, attributes: { name, available, price, category, image: { data: { attributes: { url } } } } }) => {
            return { id, imageURL: process.env.REACT_APP_API_URL + url, name, available, price, category }
        })
    })
    return data;
});

export const searchHandler = (state, action) => {
    state.busqueda = action.payload;
}
