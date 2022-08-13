import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import DoubleHeader from "./DoubleHeader";
import { coffee } from "../data";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const VerticalSlider = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <DoubleHeader title="Popular Coffee" />
      <View style={styles.sliderContainer}>
        <FlatList
          data={coffee}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
              <View style={styles.card}>
                <View style={styles.imgContainer}>
                  <Image source={item.pic} style={styles.img} />
                </View>

                <View style={styles.infoContainer}>
                  <Text style={styles.title}>{item.name}</Text>

                  <View style={styles.ratingContainer}>
                    <View style={styles.rating}>
                      <FontAwesome
                        name="star"
                        size={20}
                        color="brown"
                        style={styles.icon}
                      />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>

                    <View style={styles.rating}>
                      <Text style={styles.ratingText}>{item.type}</Text>
                    </View>

                    {item.food === "" ? null : (
                      <View style={styles.rating}>
                        <Text style={styles.ratingText}>{item.food}</Text>
                      </View>
                    )}
                  </View>

                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.discount}>30% OFF</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default VerticalSlider;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
  },
  sliderContainer: {
    overflow: "hidden",
    flex: 1,
    marginTop: 20,
  },
  card: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  imgContainer: {
    height: "100%",
    width: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    borderColor: "#522700",
    borderWidth: 1,
  },
  infoContainer: {
    height: "100%",
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  rating: {
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "brown",
    width: "auto",
    flexDirection: "row",
  },
  ratingText: {
    color: "brown",
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#522700",
  },
  priceContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#522700",
  },
  discount: {
    color: "brown",
    fontWeight: "bold",
  },
});
