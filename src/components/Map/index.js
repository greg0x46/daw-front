import React from 'react'
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import GeoJSONa from '../Map/ONS_UHE.geojson';




class GeoJsonMap extends React.Component {
  render() {
    return (
      <LeafletMap
        center={[-30.1442681,-51.2360159]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <GeoJSON
          data={{
            "type": "FeatureCollection",
            "name": "ONS_UHE",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            "features": [
            { "type": "Feature", "properties": { "Name": "Porto Colômbia" }, "geometry": { "type": "Point", "coordinates": [ -48.571944, -20.124167, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Volta Grande" }, "geometry": { "type": "Point", "coordinates": [ -48.220833, -20.028889, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Euclides da Cunha" }, "geometry": { "type": "Point", "coordinates": [ -46.949167, -21.603056, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Caconde" }, "geometry": { "type": "Point", "coordinates": [ -46.624167, -21.576667, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Marimbondo" }, "geometry": { "type": "Point", "coordinates": [ -49.196667, -20.301111, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Limoeiro (Armando Salles de Oliveira)" }, "geometry": { "type": "Point", "coordinates": [ -47.009444, -21.625278, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Bocaína" }, "geometry": { "type": "Point", "coordinates": [ -47.448629, -18.161061, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Água Vermelha (Antiga José Ermírio de Moraes)" }, "geometry": { "type": "Point", "coordinates": [ -50.3439252, -19.8653593, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Camargos" }, "geometry": { "type": "Point", "coordinates": [ -44.616111, -21.325556, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Furnas" }, "geometry": { "type": "Point", "coordinates": [ -46.320278, -20.664722, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "São Domingos" }, "geometry": { "type": "Point", "coordinates": [ -53.1820605, -20.0644687, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Itutinga" }, "geometry": { "type": "Point", "coordinates": [ -44.622353, -21.291327, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Estreito (Luiz Carlos Barreto de Carvalho)" }, "geometry": { "type": "Point", "coordinates": [ -47.279444, -20.150556, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Marechal Mascarenhas de Moraes (Antiga Peixoto)" }, "geometry": { "type": "Point", "coordinates": [ -47.066111, -20.287778, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Igarapava" }, "geometry": { "type": "Point", "coordinates": [ -47.7555361, -19.9907942, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Jaguara" }, "geometry": { "type": "Point", "coordinates": [ -47.434444, -20.023056, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Barra Bonita" }, "geometry": { "type": "Point", "coordinates": [ -48.534444, -22.519444, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Ilha Solteira" }, "geometry": { "type": "Point", "coordinates": [ -51.363611, -20.382222, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salto do Rio Verdinho" }, "geometry": { "type": "Point", "coordinates": [ -50.767222, -19.145556, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Ibitinga" }, "geometry": { "type": "Point", "coordinates": [ -48.990556, -21.759167, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Bariri (Álvaro de Souza Lima)" }, "geometry": { "type": "Point", "coordinates": [ -48.7525, -22.153333, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Barra dos Coqueiros" }, "geometry": { "type": "Point", "coordinates": [ -51.003056, -18.723333, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Nova Avanhandava (Rui Barbosa)" }, "geometry": { "type": "Point", "coordinates": [ -50.201111, -21.118889, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Caçu" }, "geometry": { "type": "Point", "coordinates": [ -51.1493563, -18.532211, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Promissão (Mário Lopes Leão)" }, "geometry": { "type": "Point", "coordinates": [ -49.783056, -21.296111, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Jupiá (Eng° Souza Dias)" }, "geometry": { "type": "Point", "coordinates": [ -51.626667, -20.775833, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Três Irmãos" }, "geometry": { "type": "Point", "coordinates": [ -51.299981, -20.668639, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Corumbá IV" }, "geometry": { "type": "Point", "coordinates": [ -48.188333, -16.320833, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Corumbá III" }, "geometry": { "type": "Point", "coordinates": [ -47.941944, -16.786111, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Batalha (Antiga Paulista)" }, "geometry": { "type": "Point", "coordinates": [ -47.48333, -17.35, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Amador Aguiar I (Antiga Capim Branco I)" }, "geometry": { "type": "Point", "coordinates": [ -48.147222, -18.790278, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Nova Ponte" }, "geometry": { "type": "Point", "coordinates": [ -47.693611, -19.133056, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Miranda" }, "geometry": { "type": "Point", "coordinates": [ -48.041389, -18.912222, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Emborcação" }, "geometry": { "type": "Point", "coordinates": [ -47.985939, -18.451931, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Funil (MG)" }, "geometry": { "type": "Point", "coordinates": [ -45.037239, -21.143614, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Itumbiara" }, "geometry": { "type": "Point", "coordinates": [ -49.098746, -18.4099565, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Corumbá I" }, "geometry": { "type": "Point", "coordinates": [ -48.531028, -17.989283, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Amador Aguiar II (Antiga Capim Branco II)" }, "geometry": { "type": "Point", "coordinates": [ -48.435278, -18.659722, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "São Simão" }, "geometry": { "type": "Point", "coordinates": [ -50.499167, -19.018056, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Cachoeira Dourada" }, "geometry": { "type": "Point", "coordinates": [ -49.493056, -18.5025, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Engº José Luiz Muller de Godoy Pereira (Antiga Foz do Rio Claro)" }, "geometry": { "type": "Point", "coordinates": [ -50.645556, -19.117778, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Taquaruçu (Escola Politécnica)" }, "geometry": { "type": "Point", "coordinates": [ -52.0, -22.541944, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Capivara (Escola de Engenharia Mackenzie)" }, "geometry": { "type": "Point", "coordinates": [ -51.359778, -22.657953, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Itaipu (Parte Brasileira)" }, "geometry": { "type": "Point", "coordinates": [ -54.5908244, -25.4057413, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Rosana" }, "geometry": { "type": "Point", "coordinates": [ -52.869444, -22.6, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Espora" }, "geometry": { "type": "Point", "coordinates": [ -51.865556, -18.675833, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Serra do Facão" }, "geometry": { "type": "Point", "coordinates": [ -47.6740055, -18.0456948, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Ourinhos" }, "geometry": { "type": "Point", "coordinates": [ -49.838067, -23.068442, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Jurumirim (Armando Avellanal Laydner)" }, "geometry": { "type": "Point", "coordinates": [ -49.23, -23.209444, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Porto Primavera (Eng° Sérgio Motta)" }, "geometry": { "type": "Point", "coordinates": [ -52.956106, -22.477972, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Chavantes" }, "geometry": { "type": "Point", "coordinates": [ -49.731389, -23.128611, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Pirajú" }, "geometry": { "type": "Point", "coordinates": [ -49.38, -23.154444, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Canoas II" }, "geometry": { "type": "Point", "coordinates": [ -50.249722, -22.936111, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salto Grande (Lucas Nogueira Garcez)" }, "geometry": { "type": "Point", "coordinates": [ -50.000278, -22.904167, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "São Jerônimo" }, "geometry": { "type": "Point", "coordinates": [ -50.913611, -23.722778, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Salto" }, "geometry": { "type": "Point", "coordinates": [ -51.169444, -18.808333, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Canoas I" }, "geometry": { "type": "Point", "coordinates": [ -50.516944, -22.941389, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Itaguaçu" }, "geometry": { "type": "Point", "coordinates": [ -50.693, -19.007, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Olho D Água" }, "geometry": { "type": "Point", "coordinates": [ -51.606944, -18.796944, 0.0 ] } },
            { "type": "Feature", "properties": { "Name": "Itumirim" }, "geometry": { "type": "Point", "coordinates": [ -52.069444, -18.506111, 0.0 ] } }
            ]
          }}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}
        />
        <Marker position={[49.8419, 24.0315]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    
    );
  }
}


export default GeoJsonMap;