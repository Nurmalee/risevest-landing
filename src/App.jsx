import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import InvestmentClub from './pages/InvestmentClub';
import Navbar from './components/navbar';
// import Products from './pages/Products';
// import AboutUs from './pages/AboutUs';
// import Blog from './pages/Blog';
import Home from './pages/home';
// import FAQs from './pages/FAQs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/investment-club" element={<InvestmentClub />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
