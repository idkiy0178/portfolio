import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/work" element={ <WorkPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
