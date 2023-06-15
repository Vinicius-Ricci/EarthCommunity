import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const MyComponent = () => {
  const handleNavigation = () => {
    Linking.openURL('https://earth-community.vercel.app/groups');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#17B978', fontSize: 20, marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
        Navegue até seus grupos através do botão abaixo
      </Text>
      <Button
        title="Ir para seus Grupos"
        onPress={handleNavigation}
        color="#17B978"
        style={{margin: 20}}
      />
    </View>
  );
};

export default MyComponent;