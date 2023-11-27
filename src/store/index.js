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
        default:
            return state;
  }
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
