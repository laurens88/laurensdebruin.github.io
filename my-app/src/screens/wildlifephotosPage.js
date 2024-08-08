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