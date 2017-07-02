export function postBook(book){
  return {type:"POST_BOOK", payload:book}
}

export function updateBook(book){
  return {type:"UPDATE_BOOK", payload:book};
}

export function deleteBook(book){
  return {type:"DELETE_BOOK", payload:book};
}
