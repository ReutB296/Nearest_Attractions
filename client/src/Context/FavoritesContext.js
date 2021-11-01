import React, { useState } from 'react';


export const FavoritesContext = React.createContext({
  favoritesList: [],
  favoritesId: [],
  setFavoritesList: () =>{},
  addOrRemoveFavorites: () =>{}
});


export default function FavoritesProvider({ children }) {
    
    const [favoritesList, setFavoritesList] = useState([]);
    const [favoritesId, setFavoritesId] = useState([]);


    const addOrRemoveFavorites = (Name, Id, isColored) =>{
        if(isColored){ //add to localStorage and to favoritesList
            localStorage.setItem(Id, Name);
            setFavoritesId([...favoritesId, Id]);
        }else{  //remove 
            localStorage.removeItem(Id);
            setFavoritesId(favoritesId.filter(item => item !== Id));
            
        } 
        
    }
    
    return (
        <FavoritesContext.Provider value={{
          favoritesList,
          setFavoritesList,
          favoritesId,
          setFavoritesId,
          addOrRemoveFavorites,
        }}>
          {children}
        </FavoritesContext.Provider>
      );
}
    