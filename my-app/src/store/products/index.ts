import {DataProductsParams, ProductDataParams, ProductsDataParams} from "./types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProduct, getProducts} from "./api";


interface StateInterface {
    products:{
        data:Array<DataProductsParams>
        total_pages:number
    }
}

const initialState:StateInterface = {
    products: {
        data:[],
        total_pages:1
    },

}

export const loadProducts = createAsyncThunk('appProducts/loadProducts', async (data:ProductsDataParams) => {
   
    const response = await getProducts(data)

    return response
})

export const getProductById = createAsyncThunk('appProducts/getProductById', async (data:ProductDataParams) => {
    
        const response = await getProduct(data);
        return response;
     
  
})




export const appProductsSlice = createSlice({
    name: 'appProducts',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadProducts.fulfilled, (state, action) =>{
            state.products = action.payload.data
        })
        builder.addCase(getProductById.fulfilled, (state, action) =>{
            state.products = {...state.products, data:[action.payload.data.data]}
        })
    }
})

export default appProductsSlice.reducer
