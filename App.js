import {useState, useEffect} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
import FavScreen from './components/FavScreen';

export default function App() {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [favorites, setFavourites] = useState([]);
  //const navigation = useNavigation();
  const Tab = createBottomTabNavigator();

  const handleLike = (liked, drink) => {
    if(liked){

      const exist = favorites.some(item => item.idDrink === drink.idDrink);
      if(!exist){
        setFavourites(prevFavourites =>[...prevFavourites,drink]);
        console.log("favorite")
      }
      else {
        setFavourites(prevFavourites =>prevFavourites.filter(item => item.idDrink !== drink.idDrink));
        console.log("remove fav");
      }

      
    }else{
      setFavourites(prevFavourites => prevFavourites.filter(item =>item !== drink));
      console.log("not fav")
    }
  }

  useEffect(() => {
    (async () => {
      
      listCocktail();
    })();
  }, []);
  const listCocktail = async () => {
    try{
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
      if(response.data && response.data.drinks){
        setCocktail(response.data.drinks);
        setLoading(false);
      }
    }
    catch (error) {
      console.error('Error no data:', error);
    }
  };
 
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} cocktail={cocktail} favorites={favorites} onLike={handleLike} loading={loading}/>}
        </Tab.Screen>
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Favourites">
        {props=> <FavScreen {...props} favorites={favorites} onLike={handleLike} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

