import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";
import ScrollButton from "../components/scrollButton";

function NaturePhotosPage() {
  const nature_photos = [
    "yosemite.jpg",
    "canyon.jpg",
    "chewlan.jpg",
    "canyon2.jpg",
    "jungle.jpg",
    "gc0.jpg",
    "canyon3.jpg",
    "gc1.jpg",
    "gc2.jpg",
    "gc3.jpg",
    "gc4.jpg",
    "gc5.jpg",
    "bryce.jpg",
    "bryce1.jpg",
    "chewlan1.jpg",
    "flower.jpg",
    "leaf.png",
    "algue.jpg",
    "joshua0.jpg",
    "joshua1.jpg",
    "skull.jpg",
    "rhodes.jpg",
    "sequoia.jpg",
    "yosemite1.jpg",
  ];
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Nature</h1>
        <PhotoGallery photos={filenamesToArray(nature_photos, 'nature')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <ScrollButton />
        <NavDrawer activeItems={["Photography"]} />
        <h1>Nature</h1>
        <PhotoGallery photos={filenamesToArray(nature_photos, 'nature')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default NaturePhotosPage;
