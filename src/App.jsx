import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Capster from "./pages/Capster";
import Queue from './pages/Queue'; // <--- 1. Import Queue
export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/capster" element={<Capster />} />
        <Route path="/queue" element={<Queue />} /> {/* <--- 2. Tambah Route */}
      </Routes>

      <Footer />
    </Router>
  );
}
