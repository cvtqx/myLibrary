import React from 'react'
import { Book } from './Book';


export const BookList = ({ books }) => {
  
  if (!books || !books.length) {
    return <p>No books in your library.</p>
  };

  const list = books.map(book => {
    return <Book book={book} key={book.id} />
  });
  
  return (
    <ul>{list}</ul>
  )
}
