import {useState} from 'react';
import { View,StyleSheet, ScrollView, TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
import {Card,Button} from 'react-native-paper';
import LikeButton from './LikeButton';

function HomeScreen({navigation, cocktail, onLike, loading}) {
    /*const handleDrink = (idDrink) =>{
      console.log("Test je navigue",idDrink)
      navigation.navigate('Details',{idDrink: idDrink});
    };*/
    const handleLike = (liked,drink) => {
        onLike(liked,drink);
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {loading ? (
            <View style = {styles.loadingContainer}>
            <ActivityIndicator size="large" color="#111A23" />
        </View>
        ):(
            <>
            <ScrollView style={styles.scrollView}>
                    
                    {cocktail && (

                    cocktail.map((drink) => (
                    <>
                        <Card elevation={4} style={styles.card}>
                        <Card.Title title={drink.strDrink}/>
                        {/* <TouchableWithoutFeedback key={drink.idDrink} onPress={() => handleDrink(drink.idDrink)}>*/}
                        <Card.Cover source={{ uri:`${drink.strDrinkThumb}` }} style={styles.cover} resizeMode='contain'/>
                        {/* </TouchableWithoutFeedback>*/}
                        <Card.Actions>
                            <LikeButton onLike={(liked) => handleLike(liked,drink)}/>
                        </Card.Actions>
                        </Card>
                    </>
                    )
                    ))}
                    </ScrollView>
            
            
        </>
        )}
        
    </View>
    
    );
  }
  const styles = StyleSheet.create({
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
    loadingContainer:{
        flex:1,
        backgroundColor:'rgba(255,255,255,0.5',
        alignItems:'center',
        position:'absolute',
        justifyContent:'center',
        width:'100%',
        height:'100%',
      },
  
  }); 
export default HomeScreen;