import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4'; // Note the change to react-ga4
import Home from "./screens/homePage";
import Resume from "./screens/resumePage";
import Travel from "./screens/travelPage";
import Photography from "./screens/photographyPage";
import AbstractPhotos from "./screens/abstractphotosPage";
import StilllifePhotos from "./screens/stilllifephotosPage";
import TravelPhotos from "./screens/travelphotosPage";
import WildlifePhotos from "./screens/wildlifephotosPage";
import ArchitecturePhotosPage from "./screens/architecturephotosPage";
import NaturePhotosPage from "./screens/naturephotosPage";
import AstroPhotosPage from "./screens/astrophotosPage";
import Projects from "./screens/projectsPage";
import Placeholder from "./screens/placeholderPage";

ReactGA.initialize('G-VHK3J7BSQX');

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/abstract" element={<AbstractPhotos />} />
        <Route path="/photography/still_life" element={<StilllifePhotos />} />
        <Route path="/photography/travel" element={<TravelPhotos />} />
        <Route path="/photography/wildlife" element={<WildlifePhotos />} />
        <Route path="/photography/architecture" element={<ArchitecturePhotosPage />} />
        <Route path="/photography/nature" element={<NaturePhotosPage />} />
        <Route path="/photography/astro" element={<AstroPhotosPage />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/projects/carcollection" element={<Placeholder />} />
        <Route path="/projects/bert" element={<Placeholder />} />
      </Routes>
    </div>
  );
}

export default App;
