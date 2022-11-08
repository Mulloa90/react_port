import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/Aboutpage";
import Contact from "./components/pages/ContactPage";
import Project from "./components/pages/ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/projects" element={<Project/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="*" element={<About/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
