import "react-native-gesture-handler";
import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import DrawerNav from "./navigation/DrawerNav"; 
import { Provider } from "react-redux";
import store from "./redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          DancingScript_400Regular,
          DancingScript_500Medium,
          DancingScript_600SemiBold,
          DancingScript_700Bold,
          DancingScript: require("./assets/fonts/DancingScript-Regular.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  onLayoutRootView();

  if (!appIsReady) {
    return null;
  }

  return(
    <Provider store={store}>
      <DrawerNav />
    </Provider>
  ); 
}