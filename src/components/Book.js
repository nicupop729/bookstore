import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ title, author }) => (
  <li>
    <h2>{title}</h2>
    <p>{author}</p>

    <RemoveBook />
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
