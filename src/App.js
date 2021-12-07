import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BooksShelf from './components/BooksShelf';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<BooksShelf />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
