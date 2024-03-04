import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header-Footer/Header';
import Footer from './Header-Footer/Footer';
import Login from './component/Pages/Login';
import Signup from './component/Pages/Signup';
import About from './component/Pages/About';
import Home from './component/Pages/Home';
import Note from './component/Pages/Note';
import { ProgressBar } from 'react-bootstrap';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <ProgressBar animated now={100} style={{ height: '5px' }} variant="info" />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/note" element={<Note />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
