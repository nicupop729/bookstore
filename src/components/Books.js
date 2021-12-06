import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      completed: '64',
      chapter: 'Chapter 3',
    },
    {
      id: 2,
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      completed: '8',
      chapter: 'Chapter 17: A lesson learned',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Andrei Tamaioaga',
      completed: '90',
      chapter: 'A final word',
    },
  ];

  return (
    <main className="hero">
      <Book books={books} />
      <Form />
    </main>
  );
};

export default Books;