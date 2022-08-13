import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import { MainStackNavigator } from "./StackNav";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search-sharp' : 'search-sharp';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#522700',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            showLabel: false
          })}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 0 }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;