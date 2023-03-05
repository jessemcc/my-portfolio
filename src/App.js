import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NavBar from "./components/NavBar/NavBar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import HomeContact from "./components/HomeContact/HomeContact";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <section className="app">
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectid" element={<ProjectPage />} />
          <Route path="/contact" element={<HomeContact />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
