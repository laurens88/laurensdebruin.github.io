import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/homePage';
import Resume from './screens/resumePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>
  );
}

export default App;
