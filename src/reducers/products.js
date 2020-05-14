import * as actionTypes from "./../constant/actionTypes"

var initialState = []

var products = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS:
            state= action.products
            
            return [...state]
            

        default:
            return [...state]
    }
};

export default products;
