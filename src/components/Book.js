import React from 'react'

export const Book = ({book}) => {
  return (
      <li>
              <div>
                  {book.title} <span>({book.year})</span>
              </div>
              <div>
                  {book.author}
              </div>
              <div>
                  {book.description}
              </div>
     </li>
  )
}
