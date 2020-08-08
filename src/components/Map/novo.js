import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';

class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: -30.1442681,
      lng: -51.2360159,
      zoom: 13,
      open: false
    };
  }
	getStyle(feature, layer) {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <GeoJson data={getGeoJson()} style={this.getStyle} />
      </Map>
    );
  }
}

window.ReactDOM.render(<SimpleExample />, document.getElementById('container'));


function getGeoJson() {
return { }};