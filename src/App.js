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
import ErrorAlert from './components/ErrorAlert';

//TO DO: add error alert component and set up error state

function App() {
  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [inputID, setInputID] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedBookId, setEditedBookId] = useState('');
  const [error, setError] = useState(null);

  const inputIDChangeHandler = e => {
    setInputID(e.target.value);
    setError(null);
  };

  const openBookEditor = (bookId) => {
    setIsEditing(true);
    setEditedBookId(bookId);
    console.log('Editing', bookId)
  }

  const fetchBookDetails = async () => {
    if (inputID) {
       try {
          const { data } = await axios.get(`https://openlibrary.org/books/${inputID}.json`);
      console.log(data)
          if (data.title) {
            const newBook = {
            id: uuidv4(),
            OLID: inputID,
            title: data.title,
            author: 'Unknown author',
            published: data.publish_date,
            description: '',
            addedAt: Date.now(),
          };
  
          dispatch(addBook(newBook));
          } else {
            setError('No book found with the provided ID');
      }    
    } catch (error) {
          setError("Error fetching book details. Please try again");     
          console.error('Error fetching book details:', error)
        }
    } else {
      setError('Please enter a valid book ID');
    } 
  };


  const addButtonHandler = async() => {
    await fetchBookDetails();
    setInputID('')
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  }

return (
  <>
    {isEditing && <EditBook bookId={editedBookId} handleCancelClick={handleCancelClick} />}
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
          {error ? (
            <ErrorAlert error= {error}/>
          ): (
             <BookList books={books} openBookEditor={openBookEditor} />  
          )}
         
        </main>
      </div>
    )}
  </>
);

}

export default App;
