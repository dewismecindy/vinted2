import "./App.css";
/* Import packages */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Import pages */
import Home from "./pages/Home";
import Offer from "./pages/Offer";
/* Import des components */
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
