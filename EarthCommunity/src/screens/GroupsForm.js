import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from "@react-native-material/core";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GroupsForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);
    };

    getUser();
  }, []);

  async function handleCreateGroup() {
    try {
      if (!userId) {
      // Verifica se o userId está definido antes de fazer a solicitação
      console.error("ID do usuário não está definid");
      console.log(userId);

      return;
    }
      const response = await axios.post(`https://earth-community-backend-production.up.railway.app/api/group/create/${userId}`, {
        name: name,
        image: image,
        description: description,
        category: category,
        headOffice: {
          city: city,
          state: state,
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text variant="h5" style={{ textAlign: 'center', paddingBottom: 50 }}>Criar um novo Grupo</Text>
      <TextInput variant="standard" color='#62D2A2' label="Nome do grupo" value={name} style={{ margin: 25 }} onChangeText={setName} />
      <TextInput variant="standard" color='#62D2A2' label="Imagem" value={image} style={{ margin: 25 }} onChangeText={setImage} />
      <TextInput variant="flat" color='#62D2A2' label="Descrição" value={description} style={{ margin: 25 }} onChangeText={setDescription} />
      <TextInput variant="standard" color='#62D2A2' label="Categoria" value={category} style={{ margin: 25 }} onChangeText={setCategory} />
      <TextInput variant="standard" color='#62D2A2' label="Estado" value={state} style={{ margin: 25 }} onChangeText={setState} />
      <TextInput variant="standard" color='#62D2A2' label="Cidade" value={city} style={{ margin: 25 }} onChangeText={setCity} />

      <Button title="Cadastrar" onPress={handleCreateGroup} color='#62D2A2' style={{ margin: 25 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    margin: 20,
    marginTop: 70,
  },
});
