import React from 'react';
import L from 'leaflet';
//import mapadusguri from 'ONS_UHE.geojson';

class Map extends React.Component {



  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [-30.1442681,-51.2360159],
      zoom: 10,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map" style={{height: "calc(100vh - 64px)"}}></div>;
  }
}

export default Map;