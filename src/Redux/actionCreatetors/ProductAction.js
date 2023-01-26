import { ADD_TO_CART } from "../productReducer/actionTypes"

const addToCart =(product)=>{
    return {
        type : ADD_TO_CART,
        payload : product
    }
}

export default addToCart