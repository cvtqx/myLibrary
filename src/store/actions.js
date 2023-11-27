export const addBook = (newBook) => ({
    type: 'ADD_BOOK',
    payload: newBook,
});

export const sortBooks = (order) => ({
    type: 'SORT_BOOKS',
    payload: order,
})