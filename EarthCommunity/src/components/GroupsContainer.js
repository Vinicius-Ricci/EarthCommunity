import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar,} from '@react-native-material/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width:'80vh',
    marginBottom:'4%',
    borderRadius: '23px',
    paddingBottom: '4%',

  },
  avatar: {
    marginTop:'4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#17B978',
    justifyContent: 'center',
    alignItems: 'center',
    marginButton:'4%',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default function Groups() {
  const [group, setGroup] = useState('');


  useEffect(() => {
    const getGroup = async () => {
      const groupString = await AsyncStorage.getItem('group');
      const group = JSON.parse(groupString);
      setGroup(group);
    };

    getGroup();
  }, []);

  async function handleGetGroup() {
    try {
      const response = await axios.get(
        'https://earth-community-backend-production.up.railway.app/api/group/get-all'
      );
      const groupData = response.data.group;
      await AsyncStorage.setItem('group', JSON.stringify(groupData));
      setGroup(groupData);
      console.log(response.data)
    } catch (error) {
      console.log('Erro ao obter o grupo da API:', error);
    }
  }

  return (
    <View style={styles.viewContainer}>
      {group && (
        <>
          <Avatar
            style={styles.avatar}
            image={{ uri: 'https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg' }}
            size={80}
          />

          <Text style={styles.title}>{group.name}</Text>
          <Text style={styles.subtitle}>Subtítulo</Text>
          <TouchableOpacity style={styles.button} onPress={handleGetGroup}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
        