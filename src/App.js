import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/client/Navbar';
import Home from './pages/client/Home';
import Shop from './pages/client/Shop';
import Arrivals from './pages/client/Arrivals';
import Sales from './pages/client/Sales';
import About from './pages/client/About';
import Contact from './pages/client/Contact';
import Cart from './pages/client/Cart';

function App() {

  return(
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
