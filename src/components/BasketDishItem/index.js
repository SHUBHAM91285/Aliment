import { View,Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDishItem = (basketDish)=>{
    return(
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{fontWeight: "600"}}>Your monthly price</Text>
            <Text style={{marginLeft: "auto"}}>{restaurant.MonthlyFee}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
    row:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    quantityContainer:{
        backgroundColor:"lightgrey",
        paddingHorizontal: 5,
        marginRight: 10,
        paddingVertical: 2,
        borderRadius: 3,
    },

});

export default BasketDishItem;