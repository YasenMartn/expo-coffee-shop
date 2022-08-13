import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.title}>Shop Now</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  btn:{
    backgroundColor: "#522700",
    paddingVertical: 10,
  },
  title:{
    textAlign: "center",
    color: "white",
    fontSize: 24,

  },
})