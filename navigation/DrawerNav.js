import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "../components/Header";
import TabNav from "./TabNav";

const Drawer = createDrawerNavigator();


const Main = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerTitle: () => <Header /> }}>
        <Drawer.Screen name="HomeScreen" component={TabNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
