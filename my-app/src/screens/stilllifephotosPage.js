import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function StillLifePhotosPage() {

    const still_life_photos = [
        'beach.jpg',
        'plane.jpg',
        'landing.jpg',
        'sky.jpg',
        'plane1.jpg',
        'ball.jpg',
        'wheel.jpg',
        'snow.jpg',
      ];

  return (
    <div>
    <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Still Life </h1>
        <PhotoGallery photos={filenamesToArray(still_life_photos, 'still_life')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Still lifes</h1>
        <PhotoGallery photos={filenamesToArray(still_life_photos, 'still_life')} mobile={true}/>
      </div>
    </div>
  );
}

export default StillLifePhotosPage;