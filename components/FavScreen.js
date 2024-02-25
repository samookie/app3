import {useState} from 'react';
import { View, Text,StyleSheet, ScrollView, TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
import {Card,Button} from 'react-native-paper';
import LikeButton from './LikeButton';

const FavScreen=({navigation,favorites, onLike}) => {
    const handleLike = (liked,drink) => {
        onLike(liked,drink);
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style = {styles.title}>Favourite Cocktails: </Text>
        <ScrollView style={styles.scrollView}>
        {favorites.length > 0 ? (
          favorites.map((drink)=>(
            <>
            <Card elevation={4} style={styles.card}>
              <Card.Title title={drink.strDrink}/>
              {/* <TouchableWithoutFeedback key={drink.idDrink} onPress={() => handleDrink(drink.idDrink)}>*/}
              <Card.Cover source={{ uri:`${drink.strDrinkThumb}` }} style={styles.cover} resizeMode='contain'/>
              {/*</TouchableWithoutFeedback> */}
              <Card.Actions>
                <LikeButton onLike={(liked) => handleLike(liked,drink)}/>
              </Card.Actions>
            </Card>
          </>
          ))
        ) : (
          <Text>No favorites added </Text>
        )}
      </ScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      width:50,
      height:50,
    },
    scrollView:{
      width:'100%',
      height:'100%',
    },
    card:{
      margin:2,
      width:'100%',
      alignItems:'100%',
    },
    cover:{
      width:'100%',
      height:200,
    },
    title:{
      fontSize:20,
      fontWeight:'Bold',
      marginBottom:10,
    },
  
  }); 
export default FavScreen;