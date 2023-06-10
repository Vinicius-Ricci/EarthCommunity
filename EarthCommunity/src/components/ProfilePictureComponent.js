import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';

export default function UserProfileComponent() {
  const [name, setName] = useState('Vinicius Ricci');
  const [isEditing, setIsEditing] = useState(false);

  const saveChanges = () => {
    // Lógica para salvar as alterações
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image source={require('../img/avatar.png')} size={100} />
        {isEditing ? (
          <Button title="Change Photo" onPress={() => console.log('Trocar foto de perfil')} />
        ) : null}
      </View>
      <View style={styles.nameContainer}>
        {isEditing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        ) : (
          <Text style={styles.nameText}>{name}</Text>
        )}
        {isEditing ? (
          <Button title="Save" onPress={saveChanges} />
        ) : (
          <Button title="Edit" onPress={() => setIsEditing(true)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nameContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
