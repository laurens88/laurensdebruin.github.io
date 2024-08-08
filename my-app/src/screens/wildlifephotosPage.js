import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function WildlifePhotosPage() {

    const wildlife_photos = [
        'peacock.jpg',
        'crab.jpg',
        'dragonfly.jpg',
    ];

  return (
    <div>
        <div className="desktop-nav">
        <Navbar />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
      </div>
        <PhotoGallery photos={filenamesToArray(wildlife_photos, 'wildlife')}/>
    </div>
  );
}

export default WildlifePhotosPage;