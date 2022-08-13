import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DoubleHeader from "./DoubleHeader";
import { coffee } from "../data";

const MiniSlider = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <DoubleHeader title="Trending Today" />
      <View style={styles.wrapper}>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {coffee.map((i) => (
            <TouchableOpacity key={i.id} onPress={() => navigation.navigate('Details', i)} >
            <View style={styles.card}  >
                <View style={styles.imgContainer} >
                    <Image style={styles.img} source={i.pic} />
                </View>
              <Text style={styles.title}>{i.name}</Text>
            </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MiniSlider;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    // backgroundColor: "lightgreen"
  },
  wrapper: {
    // backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingBottom: 20,
  },
  scroll:{
    // backgroundColor: "crimson",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: "auto",
    width: 100,
    // backgroundColor: "orange",
    marginRight: 20,
    borderRadius: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
  },
  imgContainer :{
    // backgroundColor: "blue",
    width: "100%",
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#522700",
    borderWidth: 1,
  },
  img:{
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    color: "#522700",
  },
});
