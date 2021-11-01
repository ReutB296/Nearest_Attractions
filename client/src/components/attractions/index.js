import React, { useContext } from "react";
import { AttractionsContext } from '../../Context/AttractionsContext';
import Attraction from '../attraction/index.js';
import { Attractions_container, Map_container, Map_div, MapAndAttr_container } from './style.js';
import Map from "../map";



export default function Attractions() {

const {Attractions} = useContext(AttractionsContext);


    return (
    <MapAndAttr_container>
            <Map_container>
                    <Map_div>
                        <Map/>
                    </Map_div>
            </Map_container>
            <Attractions_container>
            {Array.isArray(Attractions) && Attractions.length > 0
                    ? Attractions.map(attraction => <Attraction key={attraction.Id} {...attraction} />)
                    : "Loading..."}
            </Attractions_container>
    </MapAndAttr_container>
    );
}