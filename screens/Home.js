import {
  StyleSheet,
  View,
  Text,
  AppRegistry,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import GlobalStyle from "../style/GlobalStyle";
import Swiper from "react-native-swiper";
import { coffee } from "../data";
import BigSlider from "../components/BigSlider";
import MiniSlider from "../components/MiniSlider";
import VerticalSlider from "../components/VerticalSlider";

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BigSlider/> 
        <MiniSlider navigation={navigation} />
        <VerticalSlider navigation={navigation}/>
      </View>
    </ScrollView>
  );
}

AppRegistry.registerComponent("homePage", () => Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
  },
});
