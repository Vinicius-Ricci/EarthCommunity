import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button, Provider } from 'react-native-paper';

export default function InfoUserComponent() {
  const [name, setName] = useState('Vinicius Ricci');
  const [cpf, setCPF] = useState('765.853.906.84');
  const [email, setEmail] = useState('viniciusteste@gmail.com');
  const [dateOfBirth, setDateOfBirth] = useState('09/06/2002');
  const [isEditing, setIsEditing] = useState(false);

  const saveChanges = () => {
    setIsEditing(false);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: { primary: '#17B978' } }}
        />
        <TextInput
          label="CPF"
          value={cpf}
          onChangeText={setCPF}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: { primary: '#17B978' } }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: { primary: '#17B978' } }}
        />
        <TextInput
          label="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          disabled={!isEditing}
          style={styles.input}
          theme={{ colors: { primary: '#17B978' } }}
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
    marginVertical: 10,
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
