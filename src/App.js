import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Step from 'pages/Step';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<Step />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
