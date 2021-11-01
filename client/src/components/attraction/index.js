import React, { useState, useContext, useEffect } from 'react';
import { FavoritesContext } from '../../Context/FavoritesContext.js';
import clock from '../../img/clock.png';
import { 
    Attraction_container,
    Attr_name,
    Attr_id,
    Atrr_address,
    Attr_hours,
    Atrr_distance,
    Id_title,
    UrlLink,
    AddToFavBttn,
    SVG,
    DistanceAndFavContainer,
    Attr_hours_div,
    DistanceContainer,
    IdAndUrlContainer,
    ClockIcon
} from './style.js';


export default function Attraction({
    Name,
    Id,
    Address,
    Opening_Hours,
    distance,
    URL
    
  }) {

const { addOrRemoveFavorites } = useContext(FavoritesContext);
const isColoredFromLocalStorage = localStorage.getItem(Id) ? true : false;
const [isColored, setIsColored] = useState(isColoredFromLocalStorage);

const handleClick = () =>{
    setIsColored(!isColored);
}


useEffect(() =>{  //handle localStorage
    addOrRemoveFavorites(Name, Id, isColored);
}, [isColored]);
   

const heartColor = isColored ?  '#f20089' : '#808080'  ;  //GRAY OR PINK

return (
        <Attraction_container>
             <DistanceAndFavContainer>
                    <AddToFavBttn onClick={handleClick}> 
                            <SVG height="24px" viewBox="0 0 24 24" width="24px" fill={heartColor}><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></SVG>
                    </AddToFavBttn>
                    <DistanceContainer>
                            <Atrr_distance>{distance} ק"מ</Atrr_distance>
                            <SVG className="svg-icon" viewBox="0 0 20 20" fill="#4691f6" width="1.5em" height="1.5em"><path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path></SVG>
                    </DistanceContainer>
            </DistanceAndFavContainer>
            <Attr_name>{Name}</Attr_name>
            <Atrr_address>{Address}</Atrr_address>

            <Attr_hours_div>
                  <ClockIcon src={clock}/>
                  <Attr_hours>{Opening_Hours.replace("<br>","").replace("</br>","").replace("</br>","").replace("</br>","")}</Attr_hours>
            </Attr_hours_div>
           
            <IdAndUrlContainer>
                    <Attr_id><Id_title>מספר מזהה: </Id_title>{Id}</Attr_id>
                    <UrlLink href={URL} target="_blank">לינק לאתר</UrlLink>
            </IdAndUrlContainer>
        </Attraction_container>
    
    );
} 
  