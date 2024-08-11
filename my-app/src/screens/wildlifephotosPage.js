import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function WildlifePhotosPage() {

    const wildlife_photos = [
    "peacock.jpg",
    "swallow.jpg",
    "snake.jpg",
    "dragonfly6.jpg",
    "crab.jpg",
    "dragonfly.jpg",
    "lizard5.jpg",
    "lizard6.jpg",
    "monitor0.jpg",
    "duck.JPG",
    "dragonfly1.jpg",
    "dragonfly0.jpg",
    "lizard1.jpg",
    "dragonfly4.jpg",
    "beetle1.JPG",
    "beetle0.JPG",
    "dragonfly5.jpg",
    "lizard0.jpg",
    "monitor2.jpg",
    "squirrel.jpg",
    "chipmunk.jpg",
    "seagull.jpg",
    "bird7.jpg",
    "jay.jpg",
    "butterfly0.jpg",
    "bird16.jpg",
    "pelican1.jpg",
    "pelican2.jpg",
    "whale0.jpg",
    "bird13.jpg",
    "butterfly1.jpg",

    "prairiedog0.jpg",
    "bird11.JPG",
    "bird6.jpg",
    "bear.jpg",
    "horse.JPG",
    "cow.JPG",
    "bird0.JPG",
    "fox0.jpg",
    "swine.JPG",
    "bird4.JPG",
  ];

  return (
    <div>
        <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Wildlife photos</h1>
        <PhotoGallery photos={filenamesToArray(wildlife_photos, 'wildlife')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Wildlife photos</h1>
        <PhotoGallery photos={filenamesToArray(wildlife_photos, 'wildlife')} mobile={true}/>
      </div>
        
    </div>
  );
}

export default WildlifePhotosPage;