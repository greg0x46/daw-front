import React from 'react';
import L from 'leaflet';
import mapadusguri from './ONS_UHE.geojson';

class Map extends React.Component {

  componentDidMount() {
    // create map
    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
  
    }
  
    function onEachFeature(feature, layer) {
      layer.on({
        click: zoomToFeature
      });}
      
    function myStyle1(feature){
      return {
        weight : 2,
        opacity : 2,
                  color :'#1874CD',
                  fillColor: '#1874CD',
                  dashArray : 0,
        fillOpacity : 0.3
      }	}

    this.map = L.map('map', {
      center: [-30.1442681,-51.2360159],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        L.geoJson(mapadusguri,{
          style: myStyle1,
          onEachFeature: onEachFeature,
          }),
      ]
    });
  }

  render() {
    return <div id="map" style={{height: "calc(100vh - 64px)"}}></div>;
  }
}

export default Map;