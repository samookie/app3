import {useState, useEffect} from 'react';
import { View, Text,StyleSheet, ScrollView,ActivityIndicator} from 'react-native';


const DetailsScreen = ({navigation,route}) => {
    const {idDrink} = route.params.idDrink;
    const [details, setDetails] = useState(null);
    useEffect(()=>{
      const detail = async () => {
        try{
          const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
          if(response.data && response.data.drinks && response.data.drinks.lenght >0){
            setDetails(response.data.drinks[0]);
          }
        }
        catch(error){
          console.error('No datas');
        }
      };
      detail();
    },[idDrink]);

    const getIngredients = () => {
      if(!details) return null;

      const ingredients = [];

      for (let i=1 ; i<=15; i++){
        const name = details[`strIngredient${i}`];
        const measure = details[`strMeasure${i}`];

        if(name && name.trim() !== ''){
          ingredients.push(
            <View key={i}>
              <Text>Ingredient n°{i}:</Text>
              <Text> ingredient name : {name}</Text>
              <Text>measurement : {measure}</Text>
            </View>
          );
        };
      };
      return ingredients;
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {details ? (
            <ScrollView>
                <View>
                
                <Text>Details Screen</Text>
                <Text>Cocktail : {details.strDrink}</Text>
                <Image source={{ uri:`${details.strDrinkThumb}` }} />
                <Text>Ingredients : </Text>
                    {getIngredients()}
                <Text>Instructions : {details.strInstructions}</Text>
                </View>
            </ScrollView>
        ): (
            <View style = {styles.loadingContainer}>
                <ActivityIndicator size="large" color="#111A23" />
            </View>
        )}  
      </View>
    );
  }
export default DetailsScreen;