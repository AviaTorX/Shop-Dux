import {createStore} from 'redux';

var reducer = function(state={}, action){
  switch (action.type) {
    // case "INCREMENT":
    //   return state + action.payload;
    //   break;

    // case "DECREMENT":
    //   return state - action.payload;
    //   break;
    // default:
    case "POST_BOOK":
      return state = action.payload;
      break;

  }
  return state;
}

var store = createStore(reducer);

store.subscribe(function(){
  console.log('current state : ', store.getState());
})


// store.dispatch({type:"INCREMENT", payload:1})
// store.dispatch({type:"INCREMENT", payload:1})
// store.dispatch({type:"DECREMENT", payload:1})
// store.dispatch({type:"INCREMENT", payload:1})

store.dispatch({type:"POST_BOOK", payload:{
  id:1,
  title:"WElcome",
  description:"Learning",
  price:33
}})
