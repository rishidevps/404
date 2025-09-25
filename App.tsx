import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Festivals from './pages/Festivals';
import Traditions from './pages/Traditions';
import Culture from './pages/Culture';
import ArtForms from './pages/ArtForms';
import StatesDirectory from './pages/StatesDirectory';
import StatePage from './pages/StatePage';
import Contribute from './pages/Contribute';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/art-forms" element={<ArtForms />} />
          <Route path="/states" element={<StatesDirectory />} />
          <Route path="/states/:stateId" element={<StatePage />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;