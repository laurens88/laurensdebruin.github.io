import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function WildlifePhotosPage() {

    const wildlife_photos = [
      "butterfly0.jpg",
      "deer1.jpg",
      "lizard0.jpg",
      "peacock.jpg",
      "chipmunk.jpg",
      "dragonfly3.jpg",
      "swallow.jpg",
      "bird7.jpg",
      "bird5.JPG",
      "squirrel.jpg",
      "whale1.jpg",
      "monitor0.jpg",
      "dragonfly.jpg",
      "lizard2.jpg",
      "bird16.jpg",
      "monitor1.jpg",
      "deer0.jpg",
      "pelican1.jpg",
      "snake.jpg",
      "dragonfly0.jpg",
      "pelican2.jpg",
      "whale0.jpg",
      "bird17.jpg",
      "bird12.JPG",
      "scorpion.jpg",
      "bird3.JPG",
      "dragonfly6.jpg",
      "lizard1.jpg",
      "bird9.JPG",
      "bird1.JPG",
      "seagull.jpg",
      "bird13.jpg",
      "dragonfly2.jpg",
      "horse.JPG",
      "butterfly3.jpg",
      "lizard4.jpg",
      "bear.jpg",
      "bird14.jpg",
      "beetle0.JPG",
      "butterfly2.jpg",
      "fox0.jpg",
      "swine.JPG",
      "crab.jpg",
      "fox1.jpg",
      "monitor2.jpg",
      "sealion.jpg",
      "bird10.JPG",
      "cow.JPG",
      "dragonfly1.jpg",
      "bird15.jpg",
      "bird0.JPG",
      "lizard5.jpg",
      "bird4.JPG",
      "butterfly1.jpg",
      "bird2.JPG",
      "jay.jpg",
      "beetle1.JPG",
      "prairiedog1.jpg",
      "lizard6.jpg",
      "seal.jpg",
      "dragonfly4.jpg",
      "bird11.JPG",
      "prairiedog0.jpg",
      "pelican0.jpg",
      "dragonfly5.jpg",
      "bird6.jpg",
      "duck.JPG",
      "whale2.jpg",
      "bird8.JPG"
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