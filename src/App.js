import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/client/Navbar';
import Home from './pages/client/Home';
import Shop from './pages/client/Shop';
import Arrivals from './pages/client/Arrivals';
import Sales from './pages/client/Sales';
import About from './pages/client/About';
import Contact from './pages/client/Contact';
import Cart from './pages/client/Cart';
import SignIn from './pages/client/SignIn';
import SignUp from './pages/client/SignUp';
import ScrollToTop from './components/client/ScrollToTop';
import Aos from 'aos';
import "aos/dist/aos.css";
import NotFound from './components/client/NotFound';
import Favorites from './pages/client/Favorites';

function App() {

  useEffect(()=>{
    Aos.init({
        duration: 1000,
        once: true
    });
  }, []);


  return(
    <>
      <Router basename='/basic-clothing-frontend/'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
