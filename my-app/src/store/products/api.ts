import {DataProductsParams, ProductDataParams, ProductsDataParams} from "./types";
import api from "../../services/interceptor"

export const getProducts = (data:ProductsDataParams):Promise<{data:any}> => {
    return api.get(`https://reqres.in/api/products?page=${data.page}`)
}

export const getProduct = (data:ProductDataParams):Promise<{data:any}> => {
    
    return api.get(`https://reqres.in/api/products/${data.id}`)
}

