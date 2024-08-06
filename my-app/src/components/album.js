import React from "react";
import Photo from "../components/photo";
import "../App.css";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

function Album({ imageList }) {
  return (
    <div>
      <Grid container spacing={2} direction="row">
        {imageList.map((image) => {
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
