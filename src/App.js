import { useState } from 'react';
import axios from "axios";
import { AddBook } from './components/AddBook';
import { SortOrder } from './components/SortOrder';
import { BookList } from './components/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './store/actions';

import './App.css';
import { v4 as uuidv4 } from 'uuid';


const booksData = [
  {
    id: 1,
    title: 'Peter Pan',
    author: 'Author Name',
    published: '1953',
    description: 'Short book summary',
  },
  {
    id: 2,
    title: 'Mary Poppins',
    author: 'Author Name',
    published: '1963',
    description: 'Short book summary',
  },
  {
    id: 3,
    title: 'Winnie the Pooh',
    author: 'Author Name',
    published: '1955',
    description: 'Short book summary',
  },
];

function App() {

  // const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [inputID, setInputID] = useState('');

  // //initial books displayed on page load
  // useEffect(() => {
  //   setBooks(booksData);
  // }, []);

  const inputIDChangeHandler = e => {
    setInputID(e.target.value)
  };

  const fetchBookDetails = async () => {
    try {
      const { data } = await axios.get(`https://openlibrary.org/books/${inputID}.json`);
      
      console.log(data)
      const newBook = {
        id: uuidv4(),
        title: data.title,
        author: 'Unknown author',
        published: data.publish_date,
        description: '',
        addedAt: Date.now(),
      };
      console.log(newBook);
      dispatch(addBook(newBook));
        } catch (error) {
          console.error('Error fetching book details:', error)
        }
  };


  const addButtonHandler = () => {
    fetchBookDetails();
    setInputID('')
  };



  return (
    <div className='App'>
      <header className='App-header'>Library project</header>
      <main className='App-main'>
        <AddBook
          addButtonHandler={addButtonHandler}
          inputID={inputID}
          inputIDChangeHandler={inputIDChangeHandler} />
        <SortOrder />
        <BookList books={books} />
      </main>
   </div>
  );
}

export default App;
