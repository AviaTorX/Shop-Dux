import {combineReducers} from 'redux';
import {booksReducers} from './booksReducers';

export default combineReducers({
  book: booksReducers
})
