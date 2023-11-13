import React from 'react'
import { Book } from './Book';

export const BookList = ({books}) => {
  const list = books.map(book => {
    return <Book book={book} key={book.id} />
  });
  
  return (
    <ul>{list}</ul>
  )
}
