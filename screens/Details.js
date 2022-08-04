import { Pressable, Image, StyleSheet, Text, View, TouchableWithoutFeedback, Modal, Keyboard } from "react-native";
import React, { useState } from "react";
import { images } from "../style/GlobalStyle";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import ReviewForm from "../components/ReviewForm";
import { deleteGame } from "../redux/Slice";
import { useDispatch } from "react-redux";
import GlobalStyle from "../style/GlobalStyle";
import UpdateForm from "../components/updateForm";


const Details = ({ navigation, route }) => {

  const { title, desc, rating, id } = route.params;

  const [modalOpen, setModalOpen] = useState(false);
  
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={GlobalStyle.modalContent}>
              <AntDesign name="closecircle" style={GlobalStyle.modalIcon} onPress={() => setModalOpen(false)} />
              <UpdateForm id={id} title={title} desc={desc} rating={rating} />
            </View>
          </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <MaterialIcons 
          name="delete" 
          style={[styles.icon, styles.delete]} 
          onPress={() => {dispatch(deleteGame({gameId: id})); navigation.navigate("Home") }}  
        />
        <MaterialIcons name="edit" style={[styles.icon, styles.edit]} onPress={() => setModalOpen(true)}/>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#00CDBC",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: "DancingScript_700Bold",
    textAlign: "center",
    marginBottom: 20,
  },
  desc: {
    fontSize: 24,
    textAlign: "center",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
  },
  ratingText: {
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  iconsContainer :{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 45,
    marginHorizontal: 20,
  },
  delete : {
    color: "red",
  },
  edit : {
    color: "purple",
  },
});
