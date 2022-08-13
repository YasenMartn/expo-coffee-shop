import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DoubleHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigHeader}>{title}</Text>
      <Text style={styles.smallHeader}>See All</Text>
    </View>
  )
}

export default DoubleHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    bigHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#522700",
    },
    smallHeader: {
        fontWeight: "bold",

    },
})