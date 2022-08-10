import React from "react";
import { Routes, Route } from "react-router-dom";

// Styling
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Routes
import Homepage from "./Homepage";
import WebApp from "./WebApp";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/webapp" element={<WebApp />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
