import * as actionTypes from './../constant/actionTypes';
import callApi from './../utils/apiCaller'

export const fetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products', 'GET', []).then(response=>{
            dispatch(addProduct(response.data))
        })
    }
}

export const addProduct=(products)=>{
    return {
        type: actionTypes.FETCH_PRODUCTS,
        products
    }
}