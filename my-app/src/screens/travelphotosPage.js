import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function TravelPhotosPage() {
  const travel_photos = [
    'thai_guard.jpg',
    'canyon.jpg',
    'chewlan.jpg',
  ];
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Travel photos</h1>
        <PhotoGallery photos={filenamesToArray(travel_photos, 'travel')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Travel photos</h1>
        <PhotoGallery photos={filenamesToArray(travel_photos, 'travel')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default TravelPhotosPage;
