import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { creatStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Details: {
    screen: DetailsScreen,
  }
}, {
  initialRouteName: 'Home'
})
const AppContainer = createAppContainer(AppStackNavigator)