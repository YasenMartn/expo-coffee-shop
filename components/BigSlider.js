import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { banners } from "../data";
import Swiper from "react-native-swiper";

const BigSlider = () => {

  return (
    <View style={styles.container}>
    <Swiper style={styles.wrapper} autoplay={true} showsPagination={false} showsButtons={false}>
      {banners.map((i) => (
        
        <View key={i.id} style={[styles.slide,{ backgroundColor: `${i.color}`}]} >
          <Image source={i.img} style={styles.pic} />
        </View>
      ))}
    </Swiper>
  </View>
  )
}

AppRegistry.registerComponent("homePage", () => Home);


export default BigSlider

const styles = StyleSheet.create({
    container: {
      height: 200,
      width: "100%",
      marginBottom: 20,
      borderRadius: 10,
      overflow: "hidden",
    },
    slide: {
      height: 200,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "brown",
      borderRadius: 10,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row"
    },
    left:{
      height: "100%",
      flex: 1,
    },
    right:{
      height: "100%",
      flex: 1,
    },
    pic:{
      height: "100%",
      width: "100%",
      resizeMode: "contain"
    },
  
  });