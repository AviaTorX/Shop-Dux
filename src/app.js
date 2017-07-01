import {createStore} from 'redux';

var reducer = function(state=0, action){
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;
    default:

  }
  return state;
}

var store = createStore(reducer);

store.subscribe(function(){
  console.log('current state : ', store.getState());
})


store.dispatch({type:"INCREMENT", payload:1})
