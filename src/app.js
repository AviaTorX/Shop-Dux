import {createStore} from 'redux';

var reducer = function(state={book:[]}, action){
  switch (action.type) {
    // case "INCREMENT":
    //   return state + action.payload;
    //   break;

    // case "DECREMENT":
    //   return state - action.payload;
    //   break;
    // default:
    //CREATE BOOK
    case "POST_BOOK":
      // return {book:state.book.concat(action.payload)};
      return {book:[...state.book, ...action.payload]}
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

store.dispatch({type:"POST_BOOK", payload:[
  {
    id:1,
    title:"WElcome",
    description:"Learning",
    price:33
  },{
    id:2,
    title:"Sayonara",
    description:"Learning End",
    price:50
  }
]})

store.dispatch({type:"POST_BOOK", payload:[{
  id:3,
  title:"Start",
  description:"Begining",
  price:48
}]})
