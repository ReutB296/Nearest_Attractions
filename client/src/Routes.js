import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/home/index.js';
import Attractions from './components/attractions/index.js';
import UserPositionProvider from './Context/UserPositionContext';
import AttractionsProvider from './Context/AttractionsContext';
import AttrTypeProvider from './Context/Attr_typeContext';
import AttrTypesFilter from './components/attrTypesFilter/index.js';
import FavoritesProvider from "./Context/FavoritesContext.js";
import { 
  Attraction_container,
} from './style.js';


function Routes() {

  return (
      <>
        <Router>
        <UserPositionProvider>
          <AttrTypeProvider>
            <AttractionsProvider>
             
                <FavoritesProvider>
                  <Switch>
                    
                      <Route path="/" exact>
                          <Home/>
                      </Route>

                      <Route path="/Attractions">
                        <Attraction_container>
                            <AttrTypesFilter/>
                            <Attractions/>
                        </Attraction_container>
                      </Route>

                  </Switch>
                  </FavoritesProvider>
             
            </AttractionsProvider>
          </AttrTypeProvider>
          </UserPositionProvider>
        </Router>
      </>
  );

}

export default Routes;
