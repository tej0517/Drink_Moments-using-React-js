import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Beer from "./Components/Beer";
import Navbar from "./Components/Navbar";
import FeatureBar from "./Components/FeatureBar";
import HeroSection from "./Components/HeroSection";
import Rum from "./Components/Rum";
import Vodka from "./Components/Vodka";
import Whiskey from "./Components/Whiskey";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";


// Wrapper component to access `useLocation` inside JSX
function AppContent() {
  const location = useLocation();

  // Show these components only on the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      {isHomePage && <HeroSection />}
      {isHomePage && <FeatureBar />}
      {isHomePage && <About />}
      {isHomePage && <Blog />}
      <Routes>
        <Route path="/rum" element={<Rum />} />
        <Route path="/whiskey" element={<Whiskey />} />
        <Route path="/vodka" element={<Vodka />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
