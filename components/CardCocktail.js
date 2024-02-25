import React from 'react';
import { StyleSheet, View , Image} from 'react-native';
import { Button, Card,Layout,Text} from '@ui-kitten/components';

function Header({drinkName}) {
    return (
        <View>
        <Text category='h6'>
        {drinkName}
        </Text>
        <Text category='s1'>
          catégorie
        </Text>
      </View>
    );
}
function Footer() {
    return (
        <View
        style={ styles.footerContainer}>
        <Button
          style={styles.footerControl}
          size='small'
        >
          LIKE
        </Button>
      </View>
    );
}

const CardCocktail = ({ cocktail }) => {
    return (
        <Layout style={styles.topContainer}>
        <Header drinkName={cocktail.strDrink}/>
            <Image
                style={styles.icon}
                source={{
                uri:`${cocktail.strDrinkThumb}`,
                }}
            />
        <Footer />
        </Layout>
    );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 2,
  },
  icon:{
    width:50,
    height:50,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

export default CardCocktail;