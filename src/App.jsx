import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import WorkPage from "./components/WorkPage";
import HobbyPage from "./components/HobbyPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <HomePage />
      {/* <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/work" element={ <WorkPage /> } />
        <Route path="/hobby" element={ <HobbyPage /> } />
      </Routes> */}
    </Router>
  );
}

export default App;
