import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { orange, purple, white } from './utils/colors';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import DeckView from './components/DeckView';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import AddCard from './components/AddCard';
import Constants from "expo-constants";
import Quiz from './components/Quiz';
import { setLocalNotification } from './utils/helpers';


function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const Tabs = Platform.OS === 'ios'? createBottomTabNavigator() : createMaterialTopTabNavigator()


  const TabNav = () => (
    <Tabs.Navigator
      initialRouteName="DeckList"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "DeckList") {
            icon = <Ionicons name="ios-bookmarks" size={size} color={color} />;
          } else if (route.name === "AddDeck") {
            icon = <FontAwesome name="plus-square" size={size} color={color} />;
          } 
          return icon;
        },
      })}
      tabBarOptions={{
        header: null,
        activeTintColor: Platform.OS === "ios" ? orange : white,
        showIcon: true,
        style: {
          height: 80,
          backgroundColor: Platform.OS === "ios" ? white : orange,
          shadowColor: "rgba(0, 0, 0, 0.24)",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
      }}
    >
      <Tabs.Screen name="DeckList" component={DeckList} />
      <Tabs.Screen name="AddDeck" component={AddDeck} />
      
    </Tabs.Navigator>
  );

  const Stack = createStackNavigator();

  const MainNav = () => (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Home"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeckView"
        component={DeckView}
        options={{
          headerTintColor: white,
          headerStyle: {
            backgroundColor: orange,
          },
        }}
      />
        <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple,
          },
        }}
      />
       <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple,
          },
        }}
      />
    </Stack.Navigator>
  );
  

export default class  App extends React.Component {

   componentDidMount(){
     setLocalNotification()
   }

   render(){
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <NavigationContainer >
          <MyStatusBar backgroundColor={orange} barStyle="light-content" />
              <MainNav />
          </NavigationContainer>
          </View>
      </Provider>
         
    )
   }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
