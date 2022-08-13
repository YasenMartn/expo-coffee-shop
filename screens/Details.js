import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';


const Details = ({ navigation, route }) => {

  const { name, pic, price, rating, desc, id, reviews } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={[styles.iconContainer, styles.icLeft]} onPress={() => navigation.navigate("Home")} >
          <Ionicons name="arrow-undo" size={30} color="black" style={styles.icon} />
        </View>
        <Image source={pic} style={styles.img}/>
        <View style={[styles.iconContainer, styles.icRight]} >
          <Ionicons name="md-heart-sharp" size={30} color="black" style={styles.icon}/>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={24} color="brown" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}>{reviews} Reviews</Text>
          </View>
        </View>
        <Text style={styles.desc}>{desc}</Text>
        <CustomButton/>
      </View>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  top:{
    backgroundColor: "lightgreen",
    flex: 1,
  },
  img:{
    width: "100%",
    height: "100%",
  },
  iconContainer:{
    borderRadius: 44 / 2,
    backgroundColor: "white",
    padding: 5,
    borderWidth: 1,
    position: "absolute",
    top: 10,
    zIndex: 10,
  },
  icon:{
    color: "#522700",
    zIndex: 10,
  },
  icRight:{
    right: 10
  },
  icLeft:{
    left: 10
  },
  bottom:{
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  title:{
    fontWeight: "bold",
    fontSize: 30,
  },
  priceContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  price:{
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  rating:{
    fontSize: 20,
    color: "brown",
  },
  reviews:{
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
  },
  desc:{
    marginBottom: 20,
    fontSize: 22,
  },
})