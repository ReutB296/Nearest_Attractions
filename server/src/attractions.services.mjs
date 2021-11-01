import { Attraction } from "./db/Attractions.model.mjs";

async function Attraction_aggregate(lat, long) {
    let attr = await Attraction.aggregate([
        { "$addFields": 
            {
                "distance" : 
                    { $function:
                        {
                            body: function(lat1,long1,lat2,long2) {
                                    const R = 6371; // Radius of the earth in km
                                    const dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
                                    const dLong = (long2-long1) * (Math.PI/180); 
                                    const a = 
                                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                                        Math.cos((lat1)* (Math.PI/180)) * Math.cos((lat2) * (Math.PI/180)) * 
                                        Math.sin(dLong/2) * Math.sin(dLong/2)
                                        ; 
                                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                                    const d = R * c; // Distance in km
                                    return parseFloat(d.toFixed(2));
                            },
                            args: [lat, long, "$Y", "$X"],
                            lang: "js"
                        },
                    }
            }
        },
        { "$sort": {"distance": 1} },
        // { '$match': {Attraction_Type: type} }
       
    ])
return attr;
    
}

async function Attr_filter_aggregate(lat, long, type) {
    let attr = await Attraction.aggregate([
        { "$addFields": 
            {
                "distance" : 
                    { $function:
                        {
                            body: function(lat1,long1,lat2,long2) {
                                    const R = 6371; // Radius of the earth in km
                                    const dLat = (lat2-lat1) * (Math.PI/180);  // deg2rad below
                                    const dLong = (long2-long1) * (Math.PI/180); 
                                    const a = 
                                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                                        Math.cos((lat1)* (Math.PI/180)) * Math.cos((lat2) * (Math.PI/180)) * 
                                        Math.sin(dLong/2) * Math.sin(dLong/2)
                                        ; 
                                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                                    const d = R * c; // Distance in km
                                    return parseFloat(d.toFixed(2));
                            },
                            args: [lat, long, "$Y", "$X"],
                            lang: "js"
                        },
                    }
            }
        },
        { "$sort": {"distance": 1} },
        { '$match': {Attraction_Type: type} }
       
    ])
return attr;
    
}


export function getAttractions(lat, long, type) {
    if(type === "all"){

       return Attraction.find();
        // return Attraction_aggregate(lat, long);
    }else{
        return Attraction.find();
        // return Attr_filter_aggregate(lat, long, type);
    }
};

export async function getAttrTypes() {
    return Attraction.aggregate( [ { $group : { _id : "$Attraction_Type" } } ] );
};




