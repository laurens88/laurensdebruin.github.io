import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function StillLifePhotosPage() {

    const still_life_photos = [
        'beach.jpg',
        'plane.jpg',
        'sky.jpg',
      ];

  return (
    <div>
    <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
        <PhotoGallery photos={filenamesToArray(still_life_photos, 'still_life')}/>
    </div>
  );
}

export default StillLifePhotosPage;