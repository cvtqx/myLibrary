import { useState, useEffect } from 'react';
import axios from "axios";
import { AddBook } from './components/AddBook';
// import { SortOrder } from './components/SortOrder';
import { BookList } from './components/BookList';
import './App.css';

const booksData = [
  {
    id: 1,
    title: 'Peter Pan',
    author: 'Author Name',
    year: '1953',
    description: 'Short book summary',
  },
  {
    id: 2,
    title: 'Mary Poppins',
    author: 'Author Name',
    year: '1963',
    description: 'Short book summary',
  },
  {
    id: 3,
    title: 'Winnie the Pooh',
    author: 'Author Name',
    year: '1955',
    description: 'Short book summary',
  },
];

function App() {

  const [books, setBooks] = useState([]);
  const [inputID, setInputID] = useState('');

  //initial books displayed on page load
  useEffect(() => {
    setBooks(booksData);
  }, []);

  const inputIDChangeHandler = e => {
    setInputID(e.target.value)
  };

  const fetchBookDetails = async () => {
    const {data} = await axios.get(`https://openlibrary.org/books/${inputID}.json`);
    console.log(data);
    // const newBook = {
    //   title: data.title,
    //   author: data.
    // }
  };


  const addButtonHandler = () => {
    fetchBookDetails()
  };

  return (
    <div className='App'>
      <header className='App-header'>Library project</header>
      <main className='App-main'>
        <AddBook
          addButtonHandler={addButtonHandler}
          inputID={inputID}
          inputIDChangeHandler={inputIDChangeHandler} />
        {/* <SortOrder /> */}
        <BookList books={books} />
      </main>
   </div>
  );
}

export default App;
