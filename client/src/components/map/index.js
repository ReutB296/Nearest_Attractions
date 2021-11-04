import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { UserPositionContext } from '../../Context/UserPositionContext';
import { AttractionsContext } from '../../Context/AttractionsContext';
import nav from '../../img/location-sign-svgrepo-com.svg';
import { OnClick_Info,

 } from './style.js';



export default function Map() {
    const [selectedAttr, setSelectedAttr] = useState(null);
    const {location} = useContext(UserPositionContext);
    const {Attractions} = useContext(AttractionsContext);
    const {coordinates} = location;
    const [info_window, setInfowindow] = useState({});

    const Marker = ({ text, attr }) => {  //config marker
      return(
         <div 
             onClick={() => { 
                  setSelectedAttr(attr);
                  // infowindow.open ({
                  //   anchor: Marker,
                  //   maps,
                  //   shouldFocus: false,
                  // });
              }} 
             title={text} 
             style={ {cursor: 'pointer'}}
        >
            <img src={nav} style={{'maxWidth': '35px'}}/>
        </div>
      )
    };
    
    
    const MarkerInfo = (info_window) =>{
      console.log("infowindow from marker", info_window.content)
      return(
      <OnClick_Info>
          <div>
          
              <h2>{selectedAttr.Name}</h2>
              <p>{selectedAttr.ShortDescription}</p>
          </div>
      </OnClick_Info>
      )
    }


    const getMapOptions = () => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    };

    const handleApiLoaded = (map, maps) => {
      if (map) {
        // map.infowindow();
        // console.log("map",map)
      
        const infowindow = new maps.InfoWindow({
          content: "test"
      });
      console.log("infowindow", infowindow)
      setInfowindow(infowindow)
    
        console.log("info_window", info_window)
    }
    
    
    };
    



  return (
    <GoogleMapReact
               yesIWantToUseGoogleMapApiInternals 
               bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_KEY,
                    libraries: ['drawing'],
               }}
               defaultZoom={10} 
			         center = {{lat: coordinates.lat, lng: coordinates.long}}
               defaultCenter={{lat: coordinates.lat, lng: coordinates.long}}
               options={getMapOptions} 
               onClick={() => { setSelectedAttr(null)}}
               onDrag={() => { setSelectedAttr(null)}}
               onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
               

    >          
    { Attractions.length && Attractions.map((attr, i) => (
         <Marker
            lat= {attr.Y}
            lng= {attr.X}
            key={i}
            text={attr.Name}
            attr={attr}
        />
    )) }

    {selectedAttr && <MarkerInfo/>} 
    
    </GoogleMapReact>
  );
}