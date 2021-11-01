import React, { useState } from 'react';

export const UserPositionContext = React.createContext({
    location: {},
    success: () => {},
    error: () => {},
    options: {}
  });

export default function UserPositionProvider({ children }) {

    const [location, setLocation] = useState({
        coordinates: { lat: "", long: "" },
    });

    const options = {
        enableHighAccuracy: true,
      };
      
    const success = (pos) =>{
        setLocation({
          coordinates: {
              lat: pos.coords.latitude,
              long: pos.coords.longitude,
          },
      });
      
      }
      
    const error = (err) =>{
        setLocation({
          error: {
              code: err.code,
              message: err.message,
          },
      });
      
      }
    
return (
        <UserPositionContext.Provider value={{
          location,
          setLocation,
          success,
          error,
          options
        }}>
          {children}
        </UserPositionContext.Provider>
      );
}
    