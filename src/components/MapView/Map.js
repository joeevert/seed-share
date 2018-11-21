// import React, { Component } from 'react';
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
// import { Marker, InfoWindow } from 'react-google-maps';

import MapMarker from './MapMarker'

// class Map extends Component {
  
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

let testMarks = [
  {
    id: 1,
    position: {lat: 44.97, lng: -93.26},
    content: 'CCCCC'
  },

  {
    id: 2,
    position: {lat: 44.975, lng: -93.255},
    content: 'DDDDD'
  },

  {
    id: 3,
    position: {lat: 44.965, lng: -93.265},
    content: 'EEEEE'
  },

  {
    id: 4,
    position: {lat: 44.975, lng: -93.25},
    content: 'FFFFF'
  }
]

const Map = withScriptjs(withGoogleMap((props) => {

      return (
          <GoogleMap
            defaultZoom={14}
            center={ props.location }
            >
            
            <MapMarker 
              position={props.location}
              content="YOU ARE HERE"
            />

            {/* Mapping over testMarks */}
            {testMarks.map( marker => 
            <MapMarker
            key={marker.id} 
            position={marker.position}
            content={marker.content}
            />)}

            {/* HARD CODED MapMarker   */}
            {/* <MapMarker 
              position={ { lat: 44.977, lng: -93.263 } }
              content="AAAAA"
            />
             <MapMarker 
              position={ { lat: 44.975, lng: -93.255 } }
              content="BBBBB"
            /> */}
            
          </GoogleMap>
        )
      }
    ))



export default Map;
