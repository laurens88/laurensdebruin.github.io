// src/WorldMap.js
import React from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import worldData from '../assets/data/50m.json';

const visitedCountries = [1, 100, 200]; // Add your visited countries' ISO codes here

const WorldMap = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 147 }}>
      <ZoomableGroup>
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const isVisited = visitedCountries.includes(geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isVisited ? '#FF5733' : '#FFF'}
                  stroke="#000"
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
