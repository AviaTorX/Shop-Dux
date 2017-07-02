import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index.js';
import {addToCart} from './actions/cartActions.js';
import {postBook, updateBook, deleteBook} from './actions/bookActions.js';
import logger from 'redux-logger';
import {render} from 'react-dom';
import React from 'react';
import BooksList from './components/pages/booksList.js';
// var reducer = function(state={book:[]}, action){
//   switch (action.type) {
//     // case "INCREMENT":
//     //   return state + action.payload;
//     //   break;
//
//     // case "DECREMENT":
//     //   return state - action.payload;
//     //   break;
//     // default:
//     //CREATE BOOK
//     case "POST_BOOK":
//       // return {book:state.book.concat(action.payload)};
//       return {book:[...state.book, ...action.payload]}
//       break;
//     case "DELETE_BOOK":
//       const books = [...state.book];
//       const indexToDelete = books.findIndex(function(book){
//         return book.id === action.payload.id
//       })
//       return {book:[...books.slice(0, indexToDelete), ...books.slice(indexToDelete+1)]}
//       break;
//     case "UPDATE_BOOK":
//       const booksToUpdate = [...state.book];
//       const indexToUpdate = booksToUpdate.findIndex(function(book){
//         return book.id === action.payload.id;
//       });
//       const newUpdatedBook = {...booksToUpdate[indexToUpdate], title:action.payload.title};
//       return {book:[...booksToUpdate.slice(0, indexToUpdate), newUpdatedBook, ...booksToUpdate.slice(indexToUpdate+1)]}
//       break;
//
//   }
//   return state;
// }
var middleware = applyMiddleware(logger);
var store = createStore(reducers, middleware);


store.subscribe(function(){
  console.log('current state : ', store.getState());
})


render(
  <BooksList />, document.getElementById('main')
);

// store.dispatch({type:"INCREMENT", payload:1})
// store.dispatch({type:"INCREMENT", payload:1})
// store.dispatch({type:"DECREMENT", payload:1})
// store.dispatch({type:"INCREMENT", payload:1})

store.dispatch(postBook([
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
]))

store.dispatch(postBook([{
  id:3,
  title:"Start",
  description:"Begining",
  price:48
}]))

store.dispatch(deleteBook({
  id:1
}))

store.dispatch(updateBook({
  id:2,
  title:"rux"
}))

//SHOPPING CART

store.dispatch(addToCart([{
  id:2
}]))
