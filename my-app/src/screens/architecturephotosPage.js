import Navbar from "../components/navbar";
import NavDrawer from "../components/drawer";
import PhotoGallery from "../components/photogallery";
import filenamesToArray from "../auxilaryFunctions/filenameToArray";
import ScrollButton from '../components/scrollButton';

function ArchitecturePhotosPage() {
  const architecture_photos = [
    'building0.jpg',
    'building1.jpg',
    'building2.jpg',
    'building3.jpg',
    'building4.jpg',
    'building5.jpg',
    'building6.jpg',
    'building7.jpg',
    'building8.jpg',
    'building9.jpg',
    'building10.jpg',
    'building11.jpg',
    'building12.jpg',
    'building13.jpg',
    'building14.jpg',
    'building15.jpg',
    'church.jpg',
    'arch.jpg',
    'indoor.jpg',
    'observatory.jpg',
    'panorama.jpg',
  ];

  return (
    <div>
      <div className="desktop-nav">
        <Navbar />
        <h1 style={{paddingLeft: "15px"}}>Architecture photos</h1>
        <PhotoGallery photos={filenamesToArray(architecture_photos, 'architecture')} mobile={false}/>
      </div>
      <div className="mobile-nav">
        <ScrollButton />
        <NavDrawer activeItems={["Photography"]} />
        <h1>Architecture photos</h1>
        <PhotoGallery photos={filenamesToArray(architecture_photos, 'architecture')} mobile={true}/>
      </div>
      
    </div>
  );
}

export default ArchitecturePhotosPage;
