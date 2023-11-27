import { useState } from 'react';
import axios from "axios";
import { AddBook } from './components/AddBook';
import { SortOrder } from './components/SortOrder';
import { BookList } from './components/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './store/actions';
import { EditBook } from './components/EditBook';

import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [inputID, setInputID] = useState('');
  const [isEditing, setIsEditing] = useState(false)

  const inputIDChangeHandler = e => {
    setInputID(e.target.value)
  };

  const openBookEditor = () => {
    setIsEditing(true)
  }

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
  <>
    {isEditing && <EditBook />}
    {!isEditing && (
      <div className='App'>
        <header className='App-header'>Library project</header>
        <main className='App-main'>
          <AddBook
            addButtonHandler={addButtonHandler}
            inputID={inputID}
            inputIDChangeHandler={inputIDChangeHandler}
          />
          <SortOrder />
          <BookList books={books} openBookEditor={openBookEditor} />
        </main>
      </div>
    )}
  </>
);

}

export default App;
