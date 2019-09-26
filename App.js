import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Settings from  './src/screens/Settings';
import Sorts from './src/screens/Sorts';
import Selling from './src/topNavigator/Selling';
import { createStackNavigator } from 'react-navigation-stack';




const SellingStack = createStackNavigator({
  Selling: Selling
});

const HomeStack = createStackNavigator({
  Home: Home
})

const SettingsStack = createStackNavigator({
  Settings: Settings
})

const SortsStack = createStackNavigator({
  Sorts: Sorts
})


const TabNavigator = createBottomTabNavigator({
  SizeType: {screen:HomeStack ,
  navigationOptions:{
    tabBarIcon : ({tintColor})=>(
      <Ionicons name="ios-home" color = {tintColor} size = {24} /> 
    )
  }},
  Settings: {screen:SettingsStack,
  navigationOptions:{
    tabBarIcon : ({tintColor})=>(
      <Ionicons name="ios-settings" color = {tintColor} size = {24} /> 
    )
  }},
  Sorts: {screen:SortsStack ,
    navigationOptions:{
      tabBarIcon : ({tintColor})=>(
        <Ionicons name="ios-funnel" color = {tintColor} size = {24} /> 
      )
    }},
  Selling: {screen:SellingStack,
  navigationOptions:{
    tabBarIcon : ({tintColor})=>(
      <Ionicons name="ios-pricetags" color = {tintColor} size = {24} /> 
    )
  }},
},{
  initialRouteName:'Selling',
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    inactiveTintColor:'grey'
  }
}
)

export default createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
