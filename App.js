import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import { NavigationContainer, TabActions } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { purple, white } from './utils/colors';
import { Ionicons, FontAwesome } from "expo";

const RouteConfigs = {
  DeckList:{
    name: "DeckList",
    component: DeckList,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='cards' size={30} color={tintColor} />, title: 'DeckList'}
  }, 
  AddDeck:{
    component: AddDeck,
    name: "AddDeck",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'AddDeck'}
  }
}

const Tab = Platform.OS === 'ios'? createBottomTabNavigator() : createMaterialTopTabNavigator()

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
  };

export default function App() {
  return (
    <NavigationContainer>
            <Tab.Navigator {...TabNavigatorConfig}>
                <Tab.Screen {...RouteConfigs['DeckList']} />
                <Tab.Screen {...RouteConfigs['AddDeck']} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
