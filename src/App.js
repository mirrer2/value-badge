import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Step1 from 'pages/Step1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step1" element={<Step1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
