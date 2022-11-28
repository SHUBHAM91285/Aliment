import { View,Text, StyleSheet, Image,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
    const navigation = useNavigation();
    return(
        <Pressable onPress={()=> navigation.navigate("Dish",{id:dish.id})} style = {styles.container}>
            <Text style = {styles.day}>
                {dish.day}
            </Text>
            <Text style = {styles.name}>
                {dish.name}
            </Text>
            <Text style = {styles.description}>
                {dish.description}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal:20,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    },
    day:{
        fontWeight: "600",
        fontSize: 20,
    },
    name:{
        fontWeight: "400",
        fontSize: 17,
        letterSpacing: 0.5,
    },
    description:{
        color: "grey",
        marginVertical: 5,
    },
});

export default DishListItem;