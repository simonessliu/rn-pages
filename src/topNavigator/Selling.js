import React from 'react';
import IndexScreen from '../screens/IndexScreen'
import PendingScreen from '../screens/PendingScreen';
import CompleteScreen from '../screens/CompleteScreen';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const Selling = createMaterialTopTabNavigator({
    Current: {
      screen: IndexScreen,
      navigationOptions: {
        tabBarLabel: 'Current',
      },
    },
    Pending: {
      screen: PendingScreen,
      navigationOptions: {
        tabBarLabel: 'Pending',
      },
    },
    Completed: {
      screen: CompleteScreen,
      navigationOptions: {
        tabBarLabel: 'Completed',
      },
    },
  }, {
    navigationOptions: {
      title:'SELLING',
      headerTintColor:'white',
      headerStyle:{
          backgroundColor:'black',
          borderBottomWidth:0      
      },
      headerLeft: (<TouchableOpacity>
          <AntDesign name="left" size={20} style={{color:'white', marginLeft: 10}}/>
      </TouchableOpacity>),
  
    },
    tabBarOptions: {
      activeTintColor: 'white',
      indicatorStyle:{
        backgroundColor:'white'
      },
      style: {
        height: 56,
        backgroundColor: 'black',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        marginTop:0,
        shadowRadius: 6,
        shadowOpacity: 1,
        borderColor:'black'
      }
    }
  })

export default Selling