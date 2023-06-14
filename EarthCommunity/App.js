import { StyleSheet } from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Feed from './src/screens/Feed';
import GroupsForm from './src/screens/GroupsForm';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" options={{title: '',headerTransparent: true, headerShown: false}} component={SignIn} />
      <Stack.Screen name="Sign Up" options={{title: '',headerTransparent: true, headerShown: false}} component={SignUp} />
      <Stack.Screen name="Feed"    options={{title: '',headerTransparent: true, headerShown: false}} component={Feed} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
