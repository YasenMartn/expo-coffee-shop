import { StyleSheet, View, Text } from "react-native";
import GlobalStyle from "../style/GlobalStyle";

export default function Home() {

  return (
    <View style={GlobalStyle.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});