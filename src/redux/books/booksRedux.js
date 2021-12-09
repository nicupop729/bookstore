import getAllBooksApi from './booksApi';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getInitialBooks = () => (dispatch) => {
  getAllBooksApi().then((books) => {
    Object.keys(books).forEach((bookID) => {
      const book = {};
      book.id = bookID;
      book.title = books[bookID][0].title;
      book.author = books[bookID][0].category;
      dispatch(addBook(book));
    });
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
