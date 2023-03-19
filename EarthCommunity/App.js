import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>
      <Text variant="h1">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
