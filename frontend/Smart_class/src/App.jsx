import React, {useEffect } from 'react';
import './styles/App.css';
import Home from './pages/home'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}