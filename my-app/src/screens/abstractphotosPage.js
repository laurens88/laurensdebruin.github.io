import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function AbstractPhotosPage() {
  const abstract_photos = [
    'bubble.png',
    'exposure.jpg',
    'rust.jpg',
    'vinyl.jpg',
  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1>Abstract Photos</h1>
        <PhotoGallery photos={filenamesToArray(abstract_photos, 'abstract')} />
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Abstract Photos</h1>
        <PhotoGallery photos={filenamesToArray(abstract_photos, 'abstract')} />
      </div>
    </div>
  );
}

export default AbstractPhotosPage;
