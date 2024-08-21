import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";
import ScrollButton from "../components/scrollButton";

function TravelPhotosPage() {
  const travel_photos = [
    'temple0.jpg',
    'thai_guard.jpg',
    'temple1.jpg',
    'temple2.jpg',
    'thai_guard1.jpg',
    'temple3.jpg',
    'temple4.jpg',
    'ruin.jpg',
    'gold.jpg',
    'buddha.jpg',
    'ggb.jpg',
    'misty_ggb.jpg',
    'tram.jpg',
    'villa.jpg',
    'tower.jpg',
    'acropolis0.jpg',
    'acropolis1.jpg',
    'lighthouse.jpg',
  ];
  
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Travel photos</h1>
        <PhotoGallery photos={filenamesToArray(travel_photos, 'travel')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <ScrollButton />
        <NavDrawer activeItems={["Photography"]} />
        <h1>Travel photos</h1>
        <PhotoGallery photos={filenamesToArray(travel_photos, 'travel')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default TravelPhotosPage;
