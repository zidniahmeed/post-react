import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About';
import PageNotFound from './pages/404';
import Posts from './pages/Posts';
import CreatePost from './pages/Posts/Create';
import EditPost from "./pages/Posts/Edit"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Posts />} />
      <Route path='/post/create' element={<CreatePost />} />
      <Route path='/post/edit/:id' element={<EditPost />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
