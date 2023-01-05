import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details"
import Nav from "./components/Nav"



function App() {
  return (
   <div>
    <div className="App">
      <Router>

        <Nav />
         
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details/>} />

        </Routes>


      </Router>
      </div>
  </div>    
  );
}

export default App;
