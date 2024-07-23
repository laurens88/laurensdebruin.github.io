import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import styled from 'styled-components';
import worldMapData from '../assets/data/countries.geo.json';

// List of countries to be displayed in green
const greenCountries = {
  THA: true,
  CAN: true,
  USA: true,
  
  // Add more country codes here
};

const StyledGeography = styled(Geography)`
  cursor: pointer;
  &:hover {
    fill: #999;
  }
`;

const WorldMap = () => {
  return (
    <ComposableMap projection="geoEqualEarth" width={1000} height={500}>
      <Geographies geography={worldMapData}>
        {({ geographies }) =>
          geographies.map((geo) => {
            // Log the geo.properties object to understand its structure
            console.log('Geo properties:', geo);

            // Access the country code from geo.properties
            const countryCode = geo.id; // Adjust this property if needed
            console.log('Country Code:', countryCode);

            // Determine the fill style
            const fillStyle = greenCountries[countryCode] ? 'green' : 'black';

            return (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: fillStyle, stroke: '#FFF' },
                  hover: { fill: fillStyle, stroke: '#FFF' },
                  pressed: { fill: fillStyle, stroke: '#FFF' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;
