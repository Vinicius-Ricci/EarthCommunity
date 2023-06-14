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

const TabB = createMaterialBottomTabNavigator();

export default function Feed() {
  return (
    <TabB.Navigator
      activeColor="#ffff"
      inactiveColor="#6c757d"
      barStyle={{ backgroundColor: '#17B978' }}
    >
      <TabB.Screen 
        name="Home" 
        component={Start} 
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <TabB.Screen 
        name="Publish" 
        component={Publish} 
        options={{
          tabBarLabel: 'Publicar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
          ),
        }}
      />
      <TabB.Screen 
        name="Groups" 
        component={Groups} 
        options={{
          tabBarLabel: 'Grupos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
        }}
      />
      <TabB.Screen 
        name="GroupsForm" 
        component={GroupsForm} 
        options={{
          tabBarLabel: 'Novo Grupo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="form-select" color={color} size={26} />
          ),
        }}
      />
    
      <TabB.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: 'Perfil',
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
