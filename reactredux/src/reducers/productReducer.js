import { ActionTypes } from "../redux/contants/action-type"

const initState={
    products:[],
}
//it will take 2 parametres
export const productReducer=(state=initState,{type,payload})=>{
switch(type){
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
        default:
            return state;
}
}
export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };