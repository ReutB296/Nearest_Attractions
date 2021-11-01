import React, { useEffect, useState } from 'react';


export const AttrTypeContext = React.createContext({
  Attr_Type: [],
  
});


export default function AttrTypeProvider({ children }) {
    const [Attr_Type, setAttr_Type] = useState([]);

    useEffect(() => {  //get types on app load
            fetch(`/api/Attractions/types`)
            .then(response => response.json())
            .then(data => setAttr_Type(data));
    }, []);
    
    return (
        <AttrTypeContext.Provider value={{
          Attr_Type,
          setAttr_Type,
        }}>
          {children}
        </AttrTypeContext.Provider>
      );
}
    