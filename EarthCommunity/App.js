import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from "@react-native-material/core";
import styleGlobal from './src/style/styleGlobal';

export default function App() {
  return (
    <View style={styles.container}>
      <Text variant='h1'>Welcome</Text>
      <Text variant='h6'>Componente Pai</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleGlobal.colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
