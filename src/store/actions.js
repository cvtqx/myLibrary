export const addBook = (newBook) => ({
    type: 'ADD_BOOK',
    payload: newBook,
});

export const sortBooks = (order) => ({
    type: 'SORT_BOOKS',
    payload: order,
});

export const updateBook = (updatedBook) => ({
    type: 'UPDATE_BOOK',
    payload: updatedBook,
});