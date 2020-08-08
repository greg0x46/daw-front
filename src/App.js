import React from 'react';
import Base from './pages/Base'
import Map from './components/Map'

function App(){
  return (
    <Base>
      <Map>
        <GeoJsonMap>
        </GeoJsonMap>
        </Map>
    </Base>
  );
}

export default App;