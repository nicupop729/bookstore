import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Categories from './components/Categories';
import './App.css';

const App = () => (
  <div className="App-Wrapper-Outer">
    <div className="App-Wrapper-Inner">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BookShelf />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </div>
);

export default App;
