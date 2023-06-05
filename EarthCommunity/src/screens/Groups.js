import { Text } from '@react-native-material/core';
import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import WavesComponentGroups from '../components/WavesComponentGroups';
import { StyleSheet, View, ScrollView, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GroupsContainer from '../components/GroupsContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GroupsSeusgrupos from '../components/GroupsSeusgrupos';
import axios from "axios";

export default function Groups() {
  const [selectedTab, setSelectedTab] = useState('seusGrupos');
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [search, setSearchText]=useState('');
  
  useEffect(() => {
    const getUser = async () => {
      const userString = await AsyncStorage.getItem('user');
      const user = JSON.parse(userString);
      setUserId(user._id);
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://earth-community-backend-production.up.railway.app/api/group/get-all"
        );
        setGroups(response.data.group);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };fetchData()

  },); // Fetch data when the screen is focused

  const updateGroups = async () => {
    try {
      const response = await axios.get(
        "https://earth-community-backend-production.up.railway.app/api/group/get-all"
      );
      setGroups(response.data.group);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleForm() {
    navigation.navigate('GroupsForm', { updateGroups });
  }

  // const SearchGroup = async (group) => {
  //   try {
  //     const response = await axios.get(
  //       `https://earth-community-backend-production.up.railway.app/api/group/get-by-id/${group._id}`
  //     );
  //     setSearchText(response.data.group);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      <WavesComponentGroups />
      <TouchableOpacity style={styles.overlay} onPress={handleForm}>
        <Ionicons name="add" size={40} color="#696969" style={{fontWeight:'bold'}} />
        <Text style={{color:"#696969",fontWeight:'bold'}}>Novo Grupo</Text>
      </TouchableOpacity>
      {/* <View style={styles.tabContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#888"
        onChangeText={setSearchText}
        value={search}
      />
       <TouchableOpacity onPress={SearchGroup}>
        <Text>Pesquisar</Text>
       </TouchableOpacity>
      </View> */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'seusGrupos' && styles.activeTabButton]}
          onPress={() => handleTabPress('seusGrupos')}
        >
          <Text style={[styles.tabText, selectedTab === 'seusGrupos' && styles.activeTabText]}>
            Seus grupos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'explorar' && styles.activeTabButton]}
          onPress={() => handleTabPress('explorar')}
        >
          <Text style={[styles.tabText, selectedTab === 'explorar' && styles.activeTabText]}>
            Participando
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'criadosporvc' && styles.activeTabButton]}
          onPress={() => handleTabPress('criadosporvc')}
        >
          <Text style={[styles.tabText, selectedTab === 'criadosporvc' && styles.activeTabText]}>
            Explorar
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'seusGrupos' ? (
  <View style={styles.groupsContainer}>
    {Array.isArray(groups) ? (
      groups.map((group) => (
        <GroupsContainer key={group.id} group={group} style={styles.groupsItem} />        
      ))
    ) : (
      <Text>No groups available</Text>
    )}
  </View>
) : selectedTab === 'participando' ? (
  // <View style={styles.groupsContainer}>
  //   {Array.isArray(groups) ? (
  //     groups.map((group) => (
  //       <GroupsContainer key={group.id} group={group} style={styles.groupsItem} />
  //     ))
  //   ) : (
  //     <Text>No groups available</Text>
  //   )}
  // </View>
  <Text>teste</Text>
) : selectedTab === 'explorar' ? (
  <View style={styles.explorarView}>
    <Text>Conteúdo da view "Criados por você"</Text>
  </View>
) : (
  <View style={styles.explorarView}>
    <Text>Conteúdo da nova opção</Text>
  </View>
)}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(233,233,233)',
    width: '70%',
    height: 150,
    marginTop: '15%',
    marginLeft: '15%',
    borderRadius: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: '12%',
    marginHorizontal: 30,
  },
  tabButton: {
    padding: 10,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#62D2A2',
  },
  tabText: {
    fontSize: 16,
    color: '#696969',
  },
  activeTabText: {
    color: '#62D2A2',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  seusGruposView: {
    backgroundColor: 'lightgreen',
    padding: 20,
        borderRadius: 10,
      },
      groupsContainer:{
        width:'100%',


      },
      groupsItem: {
        // width: '48%',
        marginBottom: '10%',
      },
      
  
    });
