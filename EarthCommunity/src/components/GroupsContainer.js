import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar,} from '@react-native-material/core';


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: '4%',
    borderRadius: 23,
    paddingBottom: '4%',
    marginLeft: '3%',
    marginRight: '3%',

  },
  avatar: {
    marginTop: '4%',
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
    marginBottom: '4%',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

const GroupsContainer = ({ group }) => {
  console.log("Group ID:", group._id);

  return (
    <View style={styles.viewContainer} key={group._id}>
       <Avatar style={styles.avatar} image={{ uri: "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg" }} size={80} />
       <Text style={styles.title}>{group.name}</Text>
      <Text style={styles.subtitle}>{group.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};


export default GroupsContainer;
