import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './map.css';

const url = 'https://raw.githubusercontent.com/udit-001/india-maps-data/main/geojson/india.geojson';

const stateColors = {
  Maharashtra: '#ff7c00',
  Rajasthan: '#ff7c00',
  Gujarat: '#ff7c00',
  Karnataka: '#fda41d',
  Mizoram: '#fcb92c',
  Assam: '#fcb92c',
  Delhi: '#fcb92c',
  Uttarakhand: '#fcb92c',
};

const MapComponent = () => {
  return (
    <div className='map-container'>
      <h4 className='container-title'>India &gt; Statewise App Registered Users Count</h4>
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 1000,
        center: [80.5, 22],
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Geographies geography={url}>
        {({ geographies }) =>
          geographies.map((geo) => {

            const stateName = geo.properties.st_nm;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: stateColors[stateName] || '#D6D6DA', 
                    outline: 'none',
                  },
                  hover: {
                    fill: '#F53',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E42',
                    outline: 'none',
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
    </div>
  );
};

export default MapComponent;
