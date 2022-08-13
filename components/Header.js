import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {

  return (
    <View style={styles.header}>
        <Image source={require('../assets/brownLogo.png')} style={styles.headerImage} />
        <FontAwesome name="search" size={30} color="#522700" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: "75%",
    height: "90%",
  },
  icon: {
    position: 'absolute',
    right: -40,
  }
});