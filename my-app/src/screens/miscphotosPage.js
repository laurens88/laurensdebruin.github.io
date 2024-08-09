import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";

function MiscPhotosPage() {
  const misc_photos = [

  ];
  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Miscellaneous</h1>
        <PhotoGallery photos={filenamesToArray(misc_photos, 'misc')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <NavDrawer activeItems={["Photography"]} />
        <h1>Miscellaneous</h1>
        <PhotoGallery photos={filenamesToArray(misc_photos, 'misc')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default MiscPhotosPage;
