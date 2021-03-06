import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddNewBookForm from './AddNewBookForm';
import { getInitialBooks } from '../redux/books/booksRedux';
import './bookShelf.css';

const BookShelf = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialBooks());
  }, []);

  return (
    <main className="hero">
      <ul>
        {books.map(({ id, title, author }) => (
          <Book id={id} key={id} title={title} author={author} />
        ))}
      </ul>
      <div className="section-bar" />
      <AddNewBookForm />
    </main>
  );
};

export default BookShelf;
