import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
