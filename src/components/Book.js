import React from 'react';

//TO DO: get author details from API

export const Book = ({ book, openBookEditor }) => {

    if (!book) {
        return <p>This book could not be found.</p>
    };

    const { title, published, author, description } = book;


 return (
      <li onClick = {openBookEditor}>
          <div>
              {title && <span>{title}</span>}
              {published && <span>({published})</span>}
              </div>
              <div>
                  {author}
              </div>
              <div>
              {description ? <span>{description}</span> : <p>No description available</p>}
              </div>
     </li>
  )
}
