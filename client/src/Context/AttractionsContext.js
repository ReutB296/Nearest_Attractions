import React, { useCallback, useState } from 'react';


export const AttractionsContext = React.createContext({
  Attractions: [],
  findAttr: () => {},
  setAttractions: () =>{}
});


export default function AttractionsProvider({ children }) {
    const [Attractions, setAttractions] = useState([]);

    const findAttr = useCallback(({coordinates}, type="all") => {  //fetch attractions from server with coordinates and type
      const {lat, long} = coordinates;
            fetch(`/api/Attractions?lat=${lat}&long=${long}&type=${type}`)
            .then(response => response.json())
            .then(data => setAttractions(data));
    }, []);
    
    return (
        <AttractionsContext.Provider value={{
          Attractions,
          setAttractions,
          findAttr
        }}>
          {children}
        </AttractionsContext.Provider>
      );
}
    