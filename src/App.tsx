import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Index from './pages/Index';
import Assignments from './pages/Assignments';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
