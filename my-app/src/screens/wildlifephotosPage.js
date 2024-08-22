import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";
import ScrollButton from "../components/scrollButton";

function WildlifePhotosPage() {

    const wildlife_photos = [
    "peacock.webp",
    "swallow.webp",
    "snake.webp",
    "dragonfly6.webp",
    "crab.webp",
    "dragonfly.webp",
    "lizard5.webp",
    "lizard6.webp",
    "monitor0.webp",
    "duck.webp",
    "dragonfly1.webp",
    "dragonfly0.webp",
    "lizard1.webp",
    "dragonfly4.webp",
    "beetle1.webp",
    "beetle0.webp",
    "dragonfly5.webp",
    "lizard0.webp",
    "monitor2.webp",
    "squirrel.webp",
    "chipmunk.webp",
    "seagull.webp",
    "bird7.webp",
    "jay.webp",
    "butterfly0.webp",
    "bird16.webp",
    "pelican1.webp",
    "pelican2.webp",
    "whale0.webp",
    "bird13.webp",
    "butterfly1.webp",
    "prairiedog0.webp",
    "bird11.webp",
    "bird6.webp",
    "bear.webp",
    "horse.webp",
    "cow.webp",
    "bird0.webp",
    "fox0.webp",
    "swine.webp",
    "bird4.webp",
  ];

  return (
    <div>
        <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Wildlife photos</h1>
        <PhotoGallery photos={filenamesToArray(wildlife_photos, 'wildlife')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <ScrollButton />
        <NavDrawer activeItems={["Photography"]} />
        <h1>Wildlife photos</h1>
        <PhotoGallery photos={filenamesToArray(wildlife_photos, 'wildlife')} mobile={true}/>
      </div>
        
    </div>
  );
}

export default WildlifePhotosPage;