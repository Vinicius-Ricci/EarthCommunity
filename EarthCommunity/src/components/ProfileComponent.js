import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Provider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InfoUserComponent({ onUpdateName }) {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUri, setAvatarUri] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setName(user.info.firstName);
      setCPF(user.info.cpf);
      setEmail(user.info.email);
      setDateOfBirth(user.info.dateOfBirth);
      setAvatarUri(user.avatarUri);
    };

    getUser();
  }, []);

  const saveChanges = () => {
    setIsEditing(false);
    //onUpdateName(name); // Atualiza o nome no componente pai

    // Salva a imagem do avatar no AsyncStorage
    //AsyncStorage.setItem('avatarUri', avatarUri);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setAvatarUri(result.uri);
    }
  };

  const handleClearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Dados do AsyncStorage limpos com sucesso!');
      navigation.navigate('Sign In');

    } catch (error) {
      console.error('Erro ao limpar os dados do AsyncStorage:', error);
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          ) : (
            <Image source={require('../img/default-avatar.png')} style={styles.avatar} />
          )}
          <Text style={styles.nameText}>{name}</Text>
          {isEditing && (
            <Button
              mode="outlined"
              onPress={pickImage}
              style={[styles.changePhotoButton, { borderColor: '#17B978' }]}
              color="#17B978"
              labelStyle={{ color: '#17B978' }}
            >
              Change Photo
            </Button>
          )}
        </View>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: '#0000' }}
        />
        <TextInput
          label="CPF"
          value={cpf}
          onChangeText={setCPF}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: '#0000' }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: '#0000' }}
        />
        <TextInput
          label="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: '#0000' }}
        />
        <Button
          mode="contained"
          onPress={saveChanges}
          disabled={!isEditing}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Save
        </Button>
        <Button
          mode="contained"
          onPress={() => setIsEditing(true)}
          disabled={isEditing}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Edit
        </Button>
        <Button
          mode="contained"
          onPress={handleClearStorage}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Logout
        </Button>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    marginVertical: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhotoButton: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 350,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    marginTop: 10,
    backgroundColor: '#17B978',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});