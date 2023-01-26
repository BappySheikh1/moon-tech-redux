import { ADD_TO_CART, REMOVE_FORM_CART } from "./actionTypes";

const initialState ={
  cart : [],
};

export const productReducer =(state = initialState, action)=>{

  const selectedProduct =state.cart.find(
    product => product._id === action.payload._id
  )

    switch(action.type){
       case ADD_TO_CART :
        if(selectedProduct){
          return state
        }
        return {
            ...state,
            cart : [...state.cart, {...action.payload, quantity : 1}],
        };

       case REMOVE_FORM_CART:
        return {
            ...state,
            cart : state.cart.filter(
              product => product._id !== action.payload._id
              ),
        };


        default :
          return state
    }
    
}