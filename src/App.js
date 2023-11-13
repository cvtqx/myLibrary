import { AddBook } from './components/AddBook';
import { SortOrder } from './components/SortOrder';
import { BookList } from './components/BookList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Library project</header>
      <main className='App-main'>
        <AddBook />
        <SortOrder />
        <BookList />
      </main>
   </div>
  );
}

export default App;
