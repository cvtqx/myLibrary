import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for the web


const initialState = {
    books: [],
};

const persistConfig = {
  key: 'root',
  storage,
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [action.payload, ...state.books],
            };
        case 'UPDATE_BOOK':
            const updatedBooks = state.books.map(book => book.id === action.payload.id ? action.payload : book);
            return {
                ...state,
                books: updatedBooks,
            };
        case 'SORT_BOOKS':
            let sortedBooks = [...state.books];

            switch (action.payload) {
                case 'ascending':
                    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'descending':
                    sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'inOrderAdded':
                    sortedBooks.sort((a, b) => a.addedAt - b.addedAt);
                    break;
                default:
                    break;
            }
            return { ...state, books: sortedBooks };
        
        
        default:
            return state;
  }
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
