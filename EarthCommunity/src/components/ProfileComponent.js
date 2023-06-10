import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function InfoUserComponent() {
  const [name, setName] = useState('Vinicius Ricci');
  const [cpf, setCPF] = useState('765.853.906.84');
  const [email, setEmail] = useState('viniciusteste@gmail.com');
  const [dateOfBirth, setDateOfBirth] = useState('09/06/2002');
  const [isEditing, setIsEditing] = useState(false);

  const saveChanges = () => {
    setIsEditing(false);
  };

  const renderEditableField = (title, value, setValue) => {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>{title}</Text>
        {isEditing ? (
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
          />
        ) : (
          <Text style={styles.fieldValue}>{value}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderEditableField('Name', name, setName)}
      {renderEditableField('CPF', cpf, setCPF)}
      {renderEditableField('Email', email, setEmail)}
      {renderEditableField('Date of Birth', dateOfBirth, setDateOfBirth)}
      <TouchableOpacity
        style={[styles.button, { opacity: isEditing ? 1 : 0 }]}
        onPress={saveChanges}
        disabled={!isEditing}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { opacity: isEditing ? 0 : 1 }]}
        onPress={() => setIsEditing(true)}
        disabled={isEditing}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 10,
    marginVertical: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  fieldTitle: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  fieldValue: {
    flex: 1,
    fontSize: 16,
    color: '#121214',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#62D2A2',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    color: '#121214',
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#17B978',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
