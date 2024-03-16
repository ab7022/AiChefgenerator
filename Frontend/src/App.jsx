import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import HashRouter
import { AuthProvider } from "./AuthContext";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
