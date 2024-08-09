import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function NaturePhotosPage() {
  const nature_photos = [

  ];
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Nature</h1>
        <PhotoGallery photos={filenamesToArray(nature_photos, 'nature')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Nature</h1>
        <PhotoGallery photos={filenamesToArray(nature_photos, 'nature')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default NaturePhotosPage;
