import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/homePage";
import Resume from "./screens/resumePage";
import Hobby from "./screens/hobbyPage";
import Photography from "./screens/photographyPage";
import Projects from "./screens/projectsPage";
import Placeholder from "./screens/placeholderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/hobbies" element={<Hobby />} />
        <Route path="/projects/carcollection" element={<Placeholder />} />
        <Route path="/projects/bert" element={<Placeholder />} />
      </Routes>
    </div>
  );
}

export default App;
