import React, { useContext } from "react";
import {
  Link
} from "react-router-dom";
import { UserPositionContext } from '../../Context/UserPositionContext';
import { AttractionsContext } from '../../Context/AttractionsContext';
import { HomeContainer, 
         LocationBttn, 
         AttractionsBttn, 
         Lat, 
         Long,
         ResultsContainer,
         BttnContainer,
         Title,
         SPAN,
         ElementsContainer
} from './style.js';


export default function Home() {

  const {location, success, error, options} = useContext(UserPositionContext);
  const {findAttr} = useContext(AttractionsContext);

  const findLocation = () =>{
      if('geolocation' in navigator) {  //if geolocation is enabeled 
        navigator.geolocation.getCurrentPosition(success, error, options); //get the coordinates
      }else{
          error({
            code: 0,
            message: "Geolocation not supported",
        });
      }
}

  return (
    <HomeContainer>
        <ElementsContainer>
            <Title>גלה אטרקציות בסביבתך</Title>
            <BttnContainer>
                <LocationBttn onClick={findLocation}>הצג מיקום</LocationBttn>
                {
                  location.coordinates.lat && 
                  <>
                  <ResultsContainer>
                        <Lat><SPAN>Latitude:</SPAN> {location.coordinates.lat}</Lat>
                        <Long><SPAN>Longitude:</SPAN> {location.coordinates.long}</Long>
                    </ResultsContainer>
                    <Link to={"/Attractions"}>
                        <AttractionsBttn onClick={() => findAttr(location)}>מצא אטרקציות בסביבתי</AttractionsBttn>
                    </Link>
                  </> 
                }
            </BttnContainer>
        </ElementsContainer>
    </HomeContainer>


  );
}


