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
        <Avatar.Image
          source={require('../img/avatar.png')}
          size={100}
          style={styles.avatar}
          theme={{ colors: { primary: '#17B978' } }}
        />
        {isEditing && (
          <Button
            mode="outlined"
            onPress={() => console.log('Trocar foto de perfil')}
            style={styles.changePhotoButton}
            theme={{ colors: { primary: '#17B978' } }}
          >
            Change Photo
          </Button>
        )}
      </View>
      <View style={styles.nameContainer}>
        {isEditing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
            label="Name"
          />
        ) : (
          <Text style={styles.nameText}>{name}</Text>
        )}
        {isEditing ? (
          <Button mode="contained" onPress={saveChanges} style={styles.saveButton} theme={{ colors: { primary: '#17B978' } }}>
            Save
          </Button>
        ) : (
          <Button mode="outlined" onPress={() => setIsEditing(true)} style={styles.editButton} theme={{ colors: { primary: '#17B978' } }}>
            Edit
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  changePhotoButton: {
    marginBottom: 10,
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
  saveButton: {
    marginBottom: 10,
  },
  editButton: {
    marginBottom: 10,
  },
});
