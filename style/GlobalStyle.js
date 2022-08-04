import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    customFont: {
        fontFamily: "DancingScript_500Medium",
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      fontSize: 18,
      borderRadius: 6,
    },
    errorText: {
      color: 'crimson',
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 6,
      textAlign: 'center',
    },
    icon:{
      color: "#0d6efd",
      fontSize: 45,
    },
    modalContent: {
      flex: 1,
      padding: 20,
    },
    modalIcon: {
      color: "#0d6efd",
      alignSelf: "center",
      fontSize: 45,
    },
})

export const images = {
    ratings: {
      '1': require("../assets/rating-1.png"),
      '2': require("../assets/rating-2.png"),
      '3': require("../assets/rating-3.png"),
      '4': require("../assets/rating-4.png"),
      '5': require("../assets/rating-5.png"),
    }
  }