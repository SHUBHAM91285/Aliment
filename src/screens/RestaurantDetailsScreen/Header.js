import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './styles';


const RestaurantHeader = ({restaurant}) => {
    return(
        <View style = {styles.page}>
            <Image source={{uri: restaurant.image}} style= {styles.image}/>

            <View style = {styles.container}>
              <Text style = {styles.title}>{restaurant.name}</Text>
              <Text style = {styles.subtitle}>
                  Rs: {restaurant.MonthlyFee} { }
                  {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
              </Text>
              <Text style={styles.menuTitle}>
                Menu
              </Text>
            </View>
        </View>
    )
}

export default RestaurantHeader;