import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";
import ScrollButton from "../components/scrollButton";

function AstroPhotosPage() {
  const astro_photos = [
    'trails0.jpg',
    'moon50.jpg',
    'milkyway0.jpg',
    'milkyway1.jpg',
    'moon80.jpg',
    'milkyway2.jpg',
    'milkyway3.jpg',
    'moon100.jpg',
    'milkyway4.jpg',
    'milkyway5.jpg',
    'bloodmoon100.jpg',
  ];
  
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Astrophotography</h1>
        <PhotoGallery photos={filenamesToArray(astro_photos, 'astro')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <ScrollButton />
        <NavDrawer activeItems={["Photography"]} />
        <h1>Astrophotography</h1>
        <PhotoGallery photos={filenamesToArray(astro_photos, 'astro')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default AstroPhotosPage;
