import '../styles/App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
