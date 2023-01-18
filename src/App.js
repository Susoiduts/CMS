import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import Home from "./pages/LandingPage";
import Details from "./pages/DetailPage";
import Nav from "./components/Nav";

function App() {
  const [moviesCont, setMoviesCont] = useState([]);
  const client = createClient({
    space: "62lmtlm7lbg7",
    accessToken: "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setMoviesCont(entries.items);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div>
      <div className="App">
        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Home moviesCont={moviesCont} />} />
            <Route
              path="/details/:id"
              element={<Details moviesCont={moviesCont} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
