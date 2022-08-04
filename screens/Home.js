import { StyleSheet, View, Text, Button, Modal, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import GlobalStyle from "../style/GlobalStyle";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from "../redux/Slice";

export default function Home({navigation}) {

  const data = useSelector(state => state.stateName.games);
  const modal = useSelector(state => state.stateName.modal);

  const dispatch = useDispatch();

  return (
    <View style={GlobalStyle.container}>

      <Modal visible={modal} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={GlobalStyle.modalContent}>
              <AntDesign name="closecircle" style={GlobalStyle.modalIcon} onPress={() => dispatch(closeModal())} />
              <ReviewForm buttonTitle="add game"/>
            </View>
          </TouchableWithoutFeedback>
      </Modal>

      <Ionicons name="add-circle" style={[GlobalStyle.modalIcon, styles.addIcon]} onPress={() => dispatch(openModal())}/>
      
      <FlatList data={data} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <View style={styles.card}>
            <Text style={styles.titleText}>{ item.title }</Text>
          </View>
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addIcon : {
    fontSize: 55,
  },
  card: {
    backgroundColor: "#0d6efd",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  titleText:{
    fontSize: 24,
    color: "white",
  },
});