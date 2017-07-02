export function cartReducers(state={cart:[]}, action){
  switch (action.type) {
    case "ADD_TO_CART":
      // const cart = [...state.cart];
      return {cart:[...state.cart, ...action.payload]}
      break;
    default:

  }
  return state;
}
