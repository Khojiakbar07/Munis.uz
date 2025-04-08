import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import NotFound from "./components/not-found/NotFound";
import Home from "./components/home/Home";
import ContactUsComponent from "./components/contact-us/ContactUsComponent";
// import BottomNavBar from "./components/BottomNavbar";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<ContactUsComponent />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/profile1" element={<Dashboard/>}/> */}
        </Routes>
      </main>
      {/* <Footer /> */}
      {/* <BottomNavBar /> */}
    </Router>
  );
}

export default App
