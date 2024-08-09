import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function AstroPhotosPage() {
  const astro_photos = [

  ];
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Astrophotography</h1>
        <PhotoGallery photos={filenamesToArray(astro_photos, 'astro')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Astrophotography</h1>
        <PhotoGallery photos={filenamesToArray(astro_photos, 'astro')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default AstroPhotosPage;
