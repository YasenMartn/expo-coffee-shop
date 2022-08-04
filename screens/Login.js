import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.body} >
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center"
  },
  text: {
      fontSize: 45,
      fontFamily: "DancingScript_400Regular"
  },
  imgContainer:{
    width: 150,
    height: 150,
  },
})