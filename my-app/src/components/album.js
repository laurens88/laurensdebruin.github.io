import React from "react";
import Photo from "../components/photo";
import "../App.css";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

function Album({ imageList, dir }) {

  const generate_image_path = (image_name, dir) => {
    return {
        lowRes: `${dir}/${image_name.slice(0, -4)}_low${image_name.slice(-4)}`,
        highRes: `${dir}/${image_name}`,
        alt: `${image_name.slice(0, -4)} image`
    };
  }

  const images = imageList.map(image => generate_image_path(image, "/photography/"+dir));


  return (
    <div>
      <Grid container spacing={2} direction="row">
        {images.map((image) => {
          const { lowRes, highRes, alt } = image;
          return (
            <Grid item xs={12} md={4} key={highRes}>
              <Photo
                lowRes={lowRes}
                highRes={highRes}
                alt={alt}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

Album.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      lowRes: PropTypes.string.isRequired,
      highRes: PropTypes.string.isRequired,
      alt: PropTypes.string
    })
  ).isRequired
};

export default Album;
