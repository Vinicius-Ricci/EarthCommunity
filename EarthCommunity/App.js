import { StyleSheet, View } from 'react-native';
import { Text } from "@react-native-material/core";
import styleGlobal from './src/style/styleGlobal';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({

});
