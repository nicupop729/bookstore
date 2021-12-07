import PropTypes from 'prop-types';

const Book = ({ books }) => (
  <ul>
    {books.map((book) => (
      <li key={book.id}>
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
        <p>
          {book.completed}
          % Completed
        </p>
        <p>Current Chapter</p>
        <p>{book.chapter}</p>
        <button type="button">Update progress</button>
      </li>
    ))}
  </ul>
);

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
      chapter: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
