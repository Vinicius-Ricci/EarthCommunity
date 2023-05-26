import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import Start from './Start';
import Groups from './Groups';
import GroupsForm from './GroupsForm';
import Profile from './Profile';
import Publish from './Publish';
import styleGlobal from '../style/styleGlobal';

export default function Feed(){

  const TabB = createMaterialBottomTabNavigator();

    return(
    <TabB.Navigator
    activeColor="#ffff"
    inactiveColor="#6c757d"
    barStyle={{ backgroundColor: '#17B978' }}
    >
      <TabB.Screen 
      name="Home" 
      component={Start} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      
      />
      <TabB.Screen 
      name="Groups" 
      component={Groups} 
      options={{
        tabBarLabel: 'Groups',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={26} />
        ),
      }}
      />
         <TabB.Screen 
      name="GroupsForm" 
      component={GroupsForm} 
      />
      <TabB.Screen 
      name="Publish" 
      component={Publish} 
      options={{
        tabBarLabel: 'Publish',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
        ),
      }}
      />
      <TabB.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={26} />
        ),
      }}
      />
    </TabB.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleGlobal.colors.white,
      },

});