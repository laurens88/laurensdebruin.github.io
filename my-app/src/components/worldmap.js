import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import styled from 'styled-components';
import { geoPath, geoEqualEarth } from 'd3-geo';
import worldMapData from '../assets/data/50m.json';

const countries = {
  USA: { id: 'USA', flag: '../assets/images/flags/usa.png' },
  CAN: { id: 'CAN', flag: '../assets/images/flags/canada.png' },
};

const StyledGeography = styled(Geography)`
  cursor: pointer;
  &:hover {
    fill: #999;
  }
`;

const WorldMap = () => {
  const [selectedCountries, setSelectedCountries] = useState({});

  const toggleCountry = (countryId) => {
    setSelectedCountries((prev) => ({
      ...prev,
      [countryId]: !prev[countryId],
    }));
  };

  return (
    <ComposableMap projection={geoEqualEarth()} width={800} height={450}>
      <Geographies geography={worldMapData}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const countryCode = geo.properties.ISO_A3;
            const country = countries[countryCode];
            const isSelected = selectedCountries[countryCode];
            const fillStyle = isSelected
              ? `url(#${countryCode}-flag)`
              : '#000';

            return (
              <StyledGeography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => country && toggleCountry(countryCode)}
                style={{
                  default: { fill: fillStyle, stroke: '#FFF' },
                  hover: { fill: fillStyle, stroke: '#FFF' },
                  pressed: { fill: fillStyle, stroke: '#FFF' }
                }}
              />
            );
          })
        }
      </Geographies>
      {Object.keys(countries).map((countryCode) => {
        const country = countries[countryCode];
        return (
          <pattern
            key={countryCode}
            id={`${countryCode}-flag`}
            patternUnits="userSpaceOnUse"
            width={800}
            height={450}
          >
            <image
              href={country.flag}
              x="0"
              y="0"
              width="800"
              height="450"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        );
      })}
    </ComposableMap>
  );
};

export default WorldMap;
